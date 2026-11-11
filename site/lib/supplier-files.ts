import * as XLSX from 'xlsx';
import type { SupplierComparison, SupplierSheet, SupplierWorkbook } from './supplier-review';

export const MAX_FILE_BYTES = 5 * 1024 * 1024;
export const MAX_SHEET_ROWS = 10_000;
export const MAX_SHEET_COLUMNS = 100;
const MAX_EXPANDED_BYTES = 50 * 1024 * 1024;
const MAX_WORKBOOK_CELLS = 1_000_000;
const MAX_CELL_CHARACTERS = 32_767;
const MAX_EXPORT_ROWS = 100_000;

type InputFile = Pick<File, 'name' | 'size' | 'arrayBuffer'>;
type ParsedRows = { rows: string[][]; rawRows?: string[][]; rowNumbers: number[] };

function toSupplierSheet(name: string, sourceName: string, parsed: ParsedRows): SupplierSheet {
  const nonempty = parsed.rows.flatMap((row, index) => {
    const raw = parsed.rawRows?.[index] ?? row;
    return row.some((value) => value.trim()) || raw.some((value) => value.trim())
      ? [{ row, raw, number: parsed.rowNumbers[index] }] : [];
  });
  if (nonempty.length < 2) throw new Error(`“${name}” 시트에 상품 데이터가 없습니다. 첫 행에 열 이름, 다음 행부터 상품을 넣어 주세요.`);
  const width = Math.max(...nonempty.map(({ row }) => row.length));
  if (width > MAX_SHEET_COLUMNS) throw new Error(`열은 최대 ${MAX_SHEET_COLUMNS}개까지 비교할 수 있습니다.`);
  if (nonempty.length - 1 > MAX_SHEET_ROWS) throw new Error('상품 데이터는 시트당 최대 10,000행까지 비교할 수 있습니다.');
  const headers = Array.from({ length: width }, (_, column) => (nonempty[0].row[column] ?? '').trim());
  if (headers.some((header) => !header)) throw new Error(`“${name}” 시트에 열 이름이 비어 있습니다. 첫 행의 모든 열 이름을 입력해 주세요.`);
  const normalized = headers.map((header) => header.toLowerCase().replace(/[\s_-]/g, ''));
  if (new Set(normalized).size !== headers.length) throw new Error(`“${name}” 시트의 열 이름이 중복되었습니다. 이름을 구분해 주세요.`);
  return {
    name, sourceName, headers,
    rows: nonempty.slice(1).map(({ row }) => Array.from({ length: width }, (_, column) => row[column] ?? '')),
    ...(parsed.rawRows ? { rawRows: nonempty.slice(1).map(({ raw }) => Array.from({ length: width }, (_, column) => raw[column] ?? '')) } : {}),
    rowNumbers: nonempty.slice(1).map(({ number }) => number),
  };
}

function parseCsv(text: string): ParsedRows {
  const rows: string[][] = [];
  const rowNumbers: number[] = [];
  let row: string[] = [];
  let value = '';
  let quoted = false;
  let quoteEnded = false;
  let line = 1;
  let rowStart = 1;
  const pushValue = () => {
    if (value.length > MAX_CELL_CHARACTERS) throw new Error('한 셀의 내용은 32,767자까지 지원합니다.');
    row.push(value);
    value = '';
    quoteEnded = false;
    if (row.length > MAX_SHEET_COLUMNS) throw new Error(`열은 최대 ${MAX_SHEET_COLUMNS}개까지 비교할 수 있습니다.`);
  };
  const pushRow = () => {
    pushValue();
    while (row.length && !row[row.length - 1]) row.pop();
    if (row.some((cell) => cell.trim())) {
      rows.push(row);
      rowNumbers.push(rowStart);
    }
    row = [];
    if (rows.length > MAX_SHEET_ROWS + 1) throw new Error('상품 데이터는 시트당 최대 10,000행까지 비교할 수 있습니다.');
  };
  for (let index = 0; index < text.length; index++) {
    const char = text[index];
    if (quoted) {
      if (char === '"') {
        if (text[index + 1] === '"') { value += '"'; index++; }
        else { quoted = false; quoteEnded = true; }
      } else {
        value += char;
        if (char === '\n') line++;
      }
      continue;
    }
    if (char === ',') pushValue();
    else if (char === '\n' || char === '\r') {
      if (char === '\r' && text[index + 1] === '\n') index++;
      pushRow();
      line++;
      rowStart = line;
    } else if (char === '"' && value === '' && !quoteEnded) quoted = true;
    else {
      if (char === '"' || (quoteEnded && char.trim())) throw new Error('CSV 따옴표 형식이 올바르지 않습니다. 엑셀에서 CSV로 다시 저장해 주세요.');
      if (!quoteEnded) value += char;
    }
  }
  if (quoted) throw new Error('CSV 따옴표가 닫히지 않았습니다. 엑셀에서 CSV로 다시 저장해 주세요.');
  if (value || row.length || quoteEnded) pushRow();
  return { rows, rowNumbers };
}

function assertZipBudget(bytes: Uint8Array) {
  if (bytes.length < 22 || bytes[0] !== 0x50 || bytes[1] !== 0x4b) throw new Error('올바른 XLSX 엑셀 파일이 아닙니다. 엑셀에서 .xlsx로 다시 저장해 주세요.');
  const data = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let end = bytes.length - 22;
  while (end >= Math.max(0, bytes.length - 65_557) && data.getUint32(end, true) !== 0x06054b50) end--;
  if (end < Math.max(0, bytes.length - 65_557)) throw new Error('XLSX 파일이 손상되었습니다. 원본을 다시 저장해 주세요.');
  const entries = data.getUint16(end + 10, true);
  let offset = data.getUint32(end + 16, true);
  let expanded = 0;
  if (entries > 2000) throw new Error('엑셀 파일의 내부 항목이 너무 많습니다. 상품 목록 시트만 새 파일에 저장해 주세요.');
  for (let index = 0; index < entries; index++) {
    if (offset + 46 > bytes.length || data.getUint32(offset, true) !== 0x02014b50) throw new Error('XLSX 파일 구조를 읽을 수 없습니다. 엑셀에서 다시 저장해 주세요.');
    expanded += data.getUint32(offset + 24, true);
    if (expanded > MAX_EXPANDED_BYTES) throw new Error('압축을 푼 엑셀 내용이 50MB를 넘습니다. 상품 목록 시트만 나눠 저장해 주세요.');
    offset += 46 + data.getUint16(offset + 28, true) + data.getUint16(offset + 30, true) + data.getUint16(offset + 32, true);
  }
}

export async function parseSupplierFile(file: InputFile): Promise<SupplierWorkbook> {
  const extension = file.name.split('.').pop()?.toLowerCase();
  if (extension !== 'xlsx' && extension !== 'csv') throw new Error('.xlsx 또는 .csv 파일을 선택해 주세요.');
  if (!file.size) throw new Error('파일이 비어 있습니다. 상품 목록을 저장한 파일을 선택해 주세요.');
  if (file.size > MAX_FILE_BYTES) throw new Error('파일 하나당 최대 5MB까지 올릴 수 있습니다. 상품 목록을 나눠 주세요.');
  const bytes = new Uint8Array(await file.arrayBuffer());
  if (!bytes.length || bytes.length > MAX_FILE_BYTES) throw new Error('파일 크기를 확인해 주세요. 비어 있지 않은 5MB 이하 파일을 선택해 주세요.');
  const warnings: string[] = [];
  if (extension === 'csv') {
    let text: string;
    try { text = new TextDecoder('utf-8', { fatal: true }).decode(bytes); }
    catch {
      try { text = new TextDecoder('euc-kr', { fatal: true }).decode(bytes); }
      catch { throw new Error('CSV 문자 인코딩을 읽을 수 없습니다. CSV UTF-8 형식으로 다시 저장해 주세요.'); }
      warnings.push('한국어 이전 인코딩(CP949)으로 읽었습니다. 상품명과 코드를 확인해 주세요.');
    }
    if (text.includes('\0')) throw new Error('CSV 파일에 읽을 수 없는 문자가 있습니다. CSV UTF-8로 다시 저장해 주세요.');
    return { name: file.name, sheets: [toSupplierSheet('CSV', file.name, parseCsv(text.replace(/^\uFEFF/, '')))], warnings };
  }
  assertZipBudget(bytes);
  let workbook: XLSX.WorkBook;
  try {
    workbook = XLSX.read(bytes, { type: 'array', cellFormula: true, cellHTML: false, cellText: true, cellNF: true, sheetRows: MAX_SHEET_ROWS + 2 });
  } catch {
    throw new Error('엑셀 파일을 읽을 수 없습니다. 암호를 해제하고 .xlsx 형식으로 다시 저장해 주세요.');
  }
  const sheets: SupplierSheet[] = [];
  const skippedErrors: string[] = [];
  let hasFormula = false;
  let cellCount = 0;
  for (const name of workbook.SheetNames) {
    const sheet = workbook.Sheets[name];
    if (!sheet || !sheet['!ref']) {
      warnings.push(`“${name}” 시트는 내용이 비어 있어 비교 목록에서 제외했습니다.`);
      continue;
    }
    const range = XLSX.utils.decode_range(sheet['!fullref'] ?? sheet['!ref']);
    cellCount += (range.e.r + 1) * (range.e.c + 1);
    if (cellCount > MAX_WORKBOOK_CELLS) throw new Error('엑셀 파일 전체가 100만 셀을 넘습니다. 필요한 상품 시트만 저장해 주세요.');
    try {
      if (range.e.r + 1 > MAX_SHEET_ROWS + 1) throw new Error(`“${name}” 시트의 상품 데이터는 최대 10,000행까지 비교할 수 있습니다.`);
      if (range.e.c + 1 > MAX_SHEET_COLUMNS) throw new Error(`“${name}” 시트의 열은 최대 ${MAX_SHEET_COLUMNS}개까지 비교할 수 있습니다.`);
      if (sheet['!merges']?.length) throw new Error(`“${name}” 시트에 병합된 셀이 있습니다. 셀 병합을 풀고 한 행에 한 상품을 넣어 주세요.`);
      const rows: string[][] = [];
      const rawRows: string[][] = [];
      const rowNumbers: number[] = [];
      for (let rowIndex = 0; rowIndex <= range.e.r; rowIndex++) {
        const row: string[] = [];
        const rawRow: string[] = [];
        for (let column = 0; column <= range.e.c; column++) {
          const cell = sheet[XLSX.utils.encode_cell({ r: rowIndex, c: column })] as XLSX.CellObject | undefined;
          if (cell?.f) {
            hasFormula = true;
            if (cell.v === undefined || cell.v === null) throw new Error(`“${name}” 시트 ${rowIndex + 1}행 수식에 저장된 계산값이 없습니다. 엑셀에서 다시 계산하고 저장해 주세요.`);
          }
          if (cell?.t === 'e') throw new Error(`“${name}” 시트 ${rowIndex + 1}행에 엑셀 오류 값이 있습니다. 원본을 수정해 주세요.`);
          const value = cell ? (cell.t === 's' ? String(cell.v ?? '') : String(cell.w ?? cell.v ?? '')) : '';
          if (value.length > MAX_CELL_CHARACTERS) throw new Error('한 셀의 내용은 32,767자까지 지원합니다.');
          row.push(value);
          rawRow.push(typeof cell?.v === 'number' ? String(cell.v) : value);
        }
        while (row.length && !row[row.length - 1] && !rawRow[row.length - 1]) {
          row.pop();
          rawRow.pop();
        }
        rows.push(row);
        rawRows.push(rawRow);
        rowNumbers.push(rowIndex + 1);
      }
      sheets.push(toSupplierSheet(name, file.name, { rows, rawRows, rowNumbers }));
    } catch (error) {
      const message = error instanceof Error ? error.message : '시트 구조를 읽을 수 없습니다.';
      skippedErrors.push(message);
      warnings.push(`“${name}” 시트를 비교 목록에서 제외했습니다. ${message}`);
    }
  }
  if (!sheets.length) throw new Error(skippedErrors[0] ?? '엑셀 파일이 비어 있거나 상품 목록 시트가 없습니다.');
  if (hasFormula) warnings.push('수식은 파일에 저장된 계산값으로 비교합니다. 최신 값인지 확인하고 필요하면 엑셀에서 다시 계산해 저장해 주세요.');
  return { name: file.name, sheets, warnings };
}

export function createApprovedWorkbook(comparison: SupplierComparison, approvedIds: ReadonlySet<string>): Uint8Array {
  const approved = comparison.changes.filter((change) => approvedIds.has(change.id));
  if (!approved.length || approved.length !== approvedIds.size) throw new Error('현재 비교 결과에서 승인한 변경사항을 확인해 주세요.');
  const rowCount = approved.reduce((count, change) => count + change.fields.length, 0);
  if (rowCount > MAX_EXPORT_ROWS) throw new Error('다운로드는 변경 항목 100,000행까지 지원합니다. 승인한 상품 수나 비교 항목을 줄인 뒤 다시 내려받아 주세요.');
  const labels = { added: '신규', removed: '목록 제외', modified: '변경' };
  const rows: string[][] = [['구분', '상품코드', '항목', '이전 값', '새 값', '이전 원본 행', '새 원본 행']];
  for (const change of approved) {
    for (const field of change.fields) rows.push([labels[change.kind], change.key, field.label, field.before, field.after, String(change.beforeRowNumber ?? ''), String(change.afterRowNumber ?? '')]);
  }
  const workbook = XLSX.utils.book_new();
  const changeSheet = XLSX.utils.aoa_to_sheet(rows);
  changeSheet['!cols'] = [{ wch: 12 }, { wch: 22 }, { wch: 22 }, { wch: 35 }, { wch: 35 }, { wch: 14 }, { wch: 14 }];
  changeSheet['!autofilter'] = { ref: `A1:G${rows.length}` };
  XLSX.utils.book_append_sheet(workbook, changeSheet, '승인 변경');
  XLSX.utils.book_append_sheet(workbook, XLSX.utils.aoa_to_sheet([
    ['항목', '내용'], ['이전 파일 / 시트', comparison.beforeName], ['새 파일 / 시트', comparison.afterName],
    ['승인 상품 수', String(approved.length)], ['전체 변경 상품 수', String(comparison.changes.length)],
    ['결과 범위', '승인한 상품의 연결된 비교 항목만 담은 변경 목록입니다. 원본 상품 목록 전체를 대체하지 않습니다.'],
    ['목록 제외', '새 파일에 없는 상품입니다. 단종 또는 판매 중단 여부는 별도 확인해야 합니다.'],
    ['데이터 형식', '값만 포함합니다. 모든 셀은 텍스트이며 수식, 서식, 매크로를 포함하지 않습니다.'],
  ]), '검수 정보');
  return new Uint8Array(XLSX.write(workbook, { type: 'array', bookType: 'xlsx', compression: true, WTF: true }));
}
