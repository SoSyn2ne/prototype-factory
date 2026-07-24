'use client';

import { useMemo, useState } from 'react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type CheckIn = { week: number; weightKg: number; dose: number };
type Severity = 'mild' | 'moderate' | 'severe';
type SideEffectDay = { id: number; label: string; severity: Severity };
type ClinicQuote = { id: number; name: string; priceKRW: number };
type Recommendation = 'continue' | 'taper' | 'stop';

// ---------------------------------------------------------------------------
// Pure logic (the spec's computation, testable in isolation)
// ---------------------------------------------------------------------------
const WEEKS_PER_MONTH = 4.345;

function monthsElapsed(weeks: number) {
  return Math.max(1, Math.round(weeks / WEEKS_PER_MONTH));
}

/** Recent loss rate in kg/month from the slope of the last <=4 check-ins. */
function recentRateKgPerMonth(checkIns: CheckIn[]): number | null {
  if (checkIns.length < 2) return null;
  const sorted = [...checkIns].sort((a, b) => a.week - b.week);
  const recent = sorted.slice(-4);
  const first = recent[0];
  const last = recent[recent.length - 1];
  const weekSpan = last.week - first.week;
  if (weekSpan <= 0) return null;
  const kgLost = first.weightKg - last.weightKg; // positive = losing
  return (kgLost / weekSpan) * WEEKS_PER_MONTH;
}

function severeCount(days: SideEffectDay[]) {
  return days.filter((d) => d.severity === 'severe').length;
}

function recommend(params: {
  recentRate: number | null;
  costPerKgRising: boolean;
  severeDays: number;
}): Recommendation {
  const { recentRate, costPerKgRising, severeDays } = params;
  if (severeDays >= 3) return 'stop';
  if (recentRate == null) return 'continue';
  if (recentRate <= 0.4) return 'stop';
  if (recentRate <= 1.2 || costPerKgRising) return 'taper';
  return 'continue';
}

function won(n: number) {
  if (!Number.isFinite(n)) return '—';
  return `${Math.round(n).toLocaleString('ko-KR')}원`;
}

// ---------------------------------------------------------------------------
// Seed (mock data — a plausible month-2 user)
// ---------------------------------------------------------------------------
const seedCheckIns: CheckIn[] = [
  { week: 0, weightKg: 78.0, dose: 0.25 },
  { week: 2, weightKg: 76.6, dose: 0.5 },
  { week: 4, weightKg: 75.4, dose: 0.5 },
  { week: 6, weightKg: 74.9, dose: 1.0 },
];
const seedSideEffects: SideEffectDay[] = [
  { id: 1, label: '2주차 메스꺼움', severity: 'moderate' },
  { id: 2, label: '3주차 변비', severity: 'mild' },
  { id: 3, label: '5주차 구토', severity: 'severe' },
];
const seedQuotes: ClinicQuote[] = [
  { id: 1, name: 'A의원', priceKRW: 380000 },
  { id: 2, name: 'B의원', priceKRW: 450000 },
];

const SEV_META: Record<Severity, { label: string; dot: string; chip: string }> = {
  mild: { label: '약함', dot: '#8a8a80', chip: '#ece9e2' },
  moderate: { label: '보통', dot: '#c98500', chip: '#f6ecd4' },
  severe: { label: '심함', dot: '#c0392b', chip: '#f6dcd7' },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function WegovyRealityLedger() {
  const [monthlyCost, setMonthlyCost] = useState(400000);
  const [startWeight, setStartWeight] = useState(78);
  const [currentWeight, setCurrentWeight] = useState(74.9);
  const [checkIns, setCheckIns] = useState<CheckIn[]>(seedCheckIns);
  const [sideEffects, setSideEffects] = useState<SideEffectDay[]>(seedSideEffects);
  const [quotes] = useState<ClinicQuote[]>(seedQuotes);
  const [scenarioMonths, setScenarioMonths] = useState(3);

  // draft inputs
  const [newWeight, setNewWeight] = useState('');
  const [newDose, setNewDose] = useState('1.0');
  const [seLabel, setSeLabel] = useState('');
  const [seSeverity, setSeSeverity] = useState<Severity>('moderate');

  const weeksOnDrug = checkIns.length ? Math.max(...checkIns.map((c) => c.week)) : 0;
  const months = monthsElapsed(weeksOnDrug);
  const totalSpent = monthlyCost * months;
  const lostKg = +(startWeight - currentWeight).toFixed(1);
  const costPerKg = lostKg > 0 ? totalSpent / lostKg : Infinity;
  const rate = useMemo(() => recentRateKgPerMonth(checkIns), [checkIns]);
  const severeDays = severeCount(sideEffects);

  // scenario math
  const scenario = useMemo(() => {
    const spend = monthlyCost * scenarioMonths;
    const loss = rate != null ? +(rate * scenarioMonths).toFixed(1) : null;
    const projCostPerKg = loss && loss > 0 ? spend / loss : Infinity;
    const currentCostPerKg = costPerKg;
    const rising = Number.isFinite(projCostPerKg) && Number.isFinite(currentCostPerKg)
      ? projCostPerKg > currentCostPerKg
      : false;
    return { spend, loss, projCostPerKg, rising };
  }, [monthlyCost, scenarioMonths, rate, costPerKg]);

  const decision = recommend({ recentRate: rate, costPerKgRising: scenario.rising, severeDays });

  const addCheckIn = () => {
    const w = parseFloat(newWeight);
    if (!Number.isFinite(w)) return;
    const nextWeek = weeksOnDrug + 2;
    setCheckIns((prev) => [...prev, { week: nextWeek, weightKg: w, dose: parseFloat(newDose) || 1.0 }]);
    setCurrentWeight(w);
    setNewWeight('');
  };

  const addSideEffect = () => {
    if (!seLabel.trim()) return;
    setSideEffects((prev) => [...prev, { id: Date.now(), label: seLabel.trim(), severity: seSeverity }]);
    setSeLabel('');
  };

  const decisionMeta: Record<Recommendation, { title: string; body: string; color: string; bg: string }> = {
    continue: {
      title: '계속 (Continue)',
      body: '최근 감량 속도가 비용을 정당화합니다. 심한 부작용도 적습니다.',
      color: '#0b6b2f',
      bg: '#e3f2e6',
    },
    taper: {
      title: '감량/유지기 전환 (Taper)',
      body: '1kg당 비용이 오르는 구간입니다. 용량 유지·감량을 의사와 상의하세요.',
      color: '#8a5a00',
      bg: '#f6ecd4',
    },
    stop: {
      title: '중단 검토 (Stop)',
      body: severeDays >= 3
        ? '심한 부작용 일수가 많습니다. 지금은 비용보다 몸이 우선입니다 — 병원 상담 권장.'
        : '감량이 정체됐습니다. 이 돈을 계속 쓸 이유가 약합니다.',
      color: '#8f2a1e',
      bg: '#f6dcd7',
    },
  };
  const dm = decisionMeta[decision];
  const cheapestQuote = quotes.reduce((a, b) => (a.priceKRW <= b.priceKRW ? a : b), quotes[0]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <header className="mb-6">
        <h1 className="text-2xl font-black tracking-tight sm:text-3xl">위고비 리얼리티 장부</h1>
        <p className="mt-1 text-sm text-[#6a655c]">
          월 비용, 시작 체중, 현재 체중 — 3칸이면 이번 달 1kg당 얼마인지 나옵니다.
        </p>
      </header>

      {/* Quick calc + headline number */}
      <section className="grid gap-4 md:grid-cols-[1.1fr_1fr]">
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <h2 className="text-xs font-black uppercase tracking-wider text-[#8a8478]">빠른 계산</h2>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <Field label="월 비용 (원)" value={monthlyCost} step={10000} onChange={setMonthlyCost} />
            <Field label="시작 체중 (kg)" value={startWeight} step={0.1} onChange={setStartWeight} />
            <Field label="현재 체중 (kg)" value={currentWeight} step={0.1} onChange={setCurrentWeight} />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <Stat label="투약 기간" value={`${months}개월`} />
            <Stat label="총 지출" value={won(totalSpent)} />
            <Stat label="감량" value={lostKg > 0 ? `${lostKg}kg` : '0kg'} />
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-2xl border-2 border-[#22201c] bg-[#22201c] p-5 text-white">
          <div className="text-xs font-black uppercase tracking-wider text-white/60">이번 달 1kg당 비용</div>
          <div className="mt-1 text-4xl font-black tabular-nums sm:text-5xl">
            {lostKg > 0 ? won(costPerKg) : '측정 불가'}
          </div>
          <div className="mt-2 text-sm text-white/70">
            {lostKg > 0
              ? `${months}개월간 ${won(totalSpent)}으로 ${lostKg}kg 감량`
              : '아직 감량이 기록되지 않았습니다.'}
          </div>
          <div className="mt-3 text-xs text-white/50">
            병원 견적 최저가: {cheapestQuote.name} · {won(cheapestQuote.priceKRW)}/월
          </div>
        </div>
      </section>

      {/* Check-ins + side effects */}
      <section className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <h2 className="text-xs font-black uppercase tracking-wider text-[#8a8478]">주간 체크인</h2>
          <div className="mt-3 space-y-1.5">
            {[...checkIns].sort((a, b) => a.week - b.week).map((c, i, arr) => {
              const prev = arr[i - 1];
              const delta = prev ? +(c.weightKg - prev.weightKg).toFixed(1) : 0;
              return (
                <div key={c.week} className="flex items-center justify-between rounded-lg bg-[#f6f4ef] px-3 py-2 text-sm">
                  <span className="font-bold text-[#4a463d]">{c.week}주차</span>
                  <span className="tabular-nums">{c.weightKg}kg · {c.dose}mg</span>
                  <span className={`tabular-nums text-xs font-bold ${delta < 0 ? 'text-emerald-700' : delta > 0 ? 'text-red-700' : 'text-[#8a8478]'}`}>
                    {delta === 0 ? '—' : delta < 0 ? `${delta}kg` : `+${delta}kg`}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-3 flex gap-2">
            <input
              value={newWeight}
              onChange={(e) => setNewWeight(e.target.value)}
              placeholder="체중 kg"
              inputMode="decimal"
              className="w-24 rounded-lg border border-black/15 px-3 py-2 text-sm outline-none focus:border-[#22201c]"
            />
            <input
              value={newDose}
              onChange={(e) => setNewDose(e.target.value)}
              placeholder="용량 mg"
              inputMode="decimal"
              className="w-24 rounded-lg border border-black/15 px-3 py-2 text-sm outline-none focus:border-[#22201c]"
            />
            <button
              onClick={addCheckIn}
              className="flex-1 rounded-lg bg-[#22201c] px-3 py-2 text-sm font-black text-white hover:bg-black"
            >
              이번 주 추가
            </button>
          </div>
          <div className="mt-3 text-xs text-[#8a8478]">
            최근 감량 속도: <span className="font-bold text-[#4a463d]">{rate != null ? `${rate.toFixed(1)}kg/월` : '데이터 부족'}</span>
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <h2 className="text-xs font-black uppercase tracking-wider text-[#8a8478]">부작용 달력</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {sideEffects.map((s) => (
              <span
                key={s.id}
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold text-[#4a463d]"
                style={{ background: SEV_META[s.severity].chip }}
              >
                <span className="h-2 w-2 rounded-full" style={{ background: SEV_META[s.severity].dot }} />
                {s.label} · {SEV_META[s.severity].label}
              </span>
            ))}
          </div>
          {severeDays >= 3 ? (
            <div className="mt-3 rounded-lg bg-[#f6dcd7] px-3 py-2 text-xs font-bold text-[#8f2a1e]">
              ⚠ 심한 부작용 {severeDays}일 — 병원 상담 권장
            </div>
          ) : null}
          <div className="mt-3 flex gap-2">
            <input
              value={seLabel}
              onChange={(e) => setSeLabel(e.target.value)}
              placeholder="증상 (예: 6주차 두통)"
              className="flex-1 rounded-lg border border-black/15 px-3 py-2 text-sm outline-none focus:border-[#22201c]"
            />
            <select
              value={seSeverity}
              onChange={(e) => setSeSeverity(e.target.value as Severity)}
              className="rounded-lg border border-black/15 px-2 py-2 text-sm outline-none focus:border-[#22201c]"
            >
              <option value="mild">약함</option>
              <option value="moderate">보통</option>
              <option value="severe">심함</option>
            </select>
            <button
              onClick={addSideEffect}
              className="rounded-lg bg-[#22201c] px-3 py-2 text-sm font-black text-white hover:bg-black"
            >
              추가
            </button>
          </div>
        </div>
      </section>

      {/* Monthly reality report */}
      <section className="mt-4 rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xs font-black uppercase tracking-wider text-[#8a8478]">월간 리얼리티 리포트</h2>
          <label className="flex items-center gap-2 text-xs font-bold text-[#6a655c]">
            시나리오:
            <input
              type="range"
              min={1}
              max={6}
              value={scenarioMonths}
              onChange={(e) => setScenarioMonths(parseInt(e.target.value, 10))}
            />
            <span className="w-10 tabular-nums">{scenarioMonths}개월</span>
          </label>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Stat label={`${scenarioMonths}개월 더 쓰면`} value={won(scenario.spend)} sub="추가 지출" />
          <Stat
            label="예상 추가 감량"
            value={scenario.loss != null ? `${scenario.loss}kg` : '—'}
            sub="최근 속도 기준"
          />
          <Stat
            label="그때 1kg당 비용"
            value={won(scenario.projCostPerKg)}
            sub={scenario.rising ? '▲ 상승 중' : '유지/개선'}
          />
        </div>

        <div className="mt-4 rounded-xl p-4" style={{ background: dm.bg }}>
          <div className="text-sm font-black" style={{ color: dm.color }}>
            추천: {dm.title}
          </div>
          <div className="mt-1 text-sm" style={{ color: dm.color }}>{dm.body}</div>
          <div className="mt-2 text-[11px] text-[#6a655c]">
            판단 근거 — 최근 속도 {rate != null ? `${rate.toFixed(1)}kg/월` : 'N/A'} ·
            심한 부작용 {severeDays}일 · 1kg당 비용 {lostKg > 0 ? won(costPerKg) : 'N/A'}
            {scenario.rising ? ' · 비용 상승 추세' : ''}
          </div>
        </div>

        <p className="mt-3 text-[11px] leading-5 text-[#a09a8c]">
          ※ 이 도구는 비용/추세만 계산합니다. 용량·중단은 반드시 의사와 상의하세요. 프로토타입 — 실제 의료 조언이 아닙니다.
        </p>
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Small presentational helpers
// ---------------------------------------------------------------------------
function Field({
  label,
  value,
  step,
  onChange,
}: {
  label: string;
  value: number;
  step: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] font-bold text-[#8a8478]">{label}</span>
      <input
        type="number"
        value={value}
        step={step}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="mt-1 w-full rounded-lg border border-black/15 px-2.5 py-2 text-sm tabular-nums outline-none focus:border-[#22201c]"
      />
    </label>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-xl bg-[#f6f4ef] px-3 py-3">
      <div className="text-[11px] font-bold text-[#8a8478]">{label}</div>
      <div className="mt-0.5 text-lg font-black tabular-nums text-[#22201c]">{value}</div>
      {sub ? <div className="text-[11px] text-[#a09a8c]">{sub}</div> : null}
    </div>
  );
}
