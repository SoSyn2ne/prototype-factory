'use client';

import { useEffect, useRef, useState } from 'react';
import { UniverSheetsCorePreset } from '@univerjs/preset-sheets-core';
import sheetsCoreKoKR from '@univerjs/preset-sheets-core/locales/ko-KR';
import { CellValueType, createUniver, LocaleType, mergeLocales, type ICellData, type IWorksheetData } from '@univerjs/presets';
import type { ProductChange } from '@/lib/supplier-review';
import '@univerjs/preset-sheets-core/lib/index.css';

function sheetData(id: string, name: string, rows: string[][]): Partial<IWorksheetData> {
  const cellData: Record<number, Record<number, ICellData>> = {};
  rows.forEach((row, rowIndex) => {
    cellData[rowIndex] = {};
    row.forEach((value, columnIndex) => {
      // Imported values are always text. Formula-looking supplier data must never execute.
      cellData[rowIndex][columnIndex] = { v: value, t: CellValueType.STRING, ...(rowIndex === 0 ? { s: { bl: 1 } } : {}) };
    });
  });
  return {
    id, name, cellData,
    rowCount: Math.max(16, rows.length + 2),
    columnCount: Math.max(4, ...rows.map((row) => row.length)),
    defaultRowHeight: 32,
    defaultColumnWidth: 220,
    rowHeader: { width: 42 },
    columnHeader: { height: 24 },
    freeze: { xSplit: 0, ySplit: 1, startRow: 1, startColumn: 0 },
  };
}

export default function UniverReviewGrid({ change, beforeHeaders, afterHeaders }: {
  change: ProductChange;
  beforeHeaders: string[];
  afterHeaders: string[];
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const container = document.createElement('div');
    container.style.height = '100%';
    host.append(container);
    let instance: ReturnType<typeof createUniver> | undefined;
    setError(false);
    try {
      instance = createUniver({
        locale: LocaleType.KO_KR,
        locales: { [LocaleType.KO_KR]: mergeLocales(sheetsCoreKoKR) },
        darkMode: document.documentElement.classList.contains('dark'),
        presets: [UniverSheetsCorePreset({
          container, header: false, toolbar: false, contextMenu: false, formulaBar: false,
          disableAutoFocus: true,
          footer: { sheetBar: true, statisticBar: false, menus: false, zoomSlider: true, addSheetButtonConfig: { show: false } },
          sheets: { protectedRangeShadow: false, disableForceStringAlert: true, disableForceStringMark: true },
        })],
      });
      const comparisonRows = [
        ['항목', '기준 값', '새 값'],
        ...change.fields.map((field) => [field.label, field.before === '' ? '(빈 값)' : field.before, field.after === '' ? '(빈 값)' : field.after]),
      ];
      const sheets: Record<string, Partial<IWorksheetData>> = {
        comparison: sheetData('comparison', '변경 비교', comparisonRows),
      };
      const sheetOrder = ['comparison'];
      if (change.beforeRow) {
        sheets.before = sheetData('before', '기준 원본 행', [beforeHeaders, change.beforeRow]);
        sheetOrder.push('before');
      }
      if (change.afterRow) {
        sheets.after = sheetData('after', '새 원본 행', [afterHeaders, change.afterRow]);
        sheetOrder.push('after');
      }
      const workbook = instance.univerAPI.createWorkbook({ id: `supplier-review-${change.id}`, name: `${change.key} 변경 검수`, sheetOrder, sheets });
      workbook.setEditable(false);
      instance.univerAPI.setPermissionDialogVisible(false);
    } catch {
      setError(true);
    }
    return () => {
      const current = instance;
      queueMicrotask(() => { current?.univer.dispose(); container.remove(); });
    };
  }, [change, beforeHeaders, afterHeaders, attempt]);

  return (
    <div className="relative">
      <div ref={hostRef} className="h-[26rem] w-full overflow-hidden" aria-label={`${change.key} 변경 비교 스프레드시트`} role="region" />
      {error ? <div role="alert" className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white p-6 text-center dark:bg-zinc-950"><p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">비교 시트를 표시하지 못했어요.<br />아래 텍스트 표에서 변경값을 확인할 수 있어요.</p><button type="button" onClick={() => setAttempt((value) => value + 1)} className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-bold dark:border-zinc-700">시트 다시 열기</button></div> : null}
    </div>
  );
}
