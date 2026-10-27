import type { CommercialBrief } from '@/lib/project-analysis';

const evidenceKindLabels = {
  'paid-alternative': '다른 사업자의 유료 제안',
  'operator-report': '운영 업무 기록',
  'official-guide': '공식 운영 안내',
};

function OfferFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 py-2">
      <dt className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">{label}</dt>
      <dd className={`mt-1 whitespace-pre-wrap break-words text-sm leading-6 ${value ? 'text-zinc-800 dark:text-zinc-200' : 'text-zinc-500 dark:text-zinc-400'}`}>
        {value || '아직 제안이 기록되지 않았습니다. 실증 전에 정할 항목입니다.'}
      </dd>
    </div>
  );
}

export default function CommercialPilotPanel({ brief }: { brief: CommercialBrief | null }) {
  if (!brief) {
    return (
      <section className="mb-6 rounded-lg border border-dashed border-zinc-300 p-4 dark:border-zinc-700" aria-labelledby="commercial-pilot-title">
        <h2 id="commercial-pilot-title" className="text-sm font-bold text-zinc-800 dark:text-zinc-200">유료 실증안 미작성</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">유료화를 고려한다면 누가 비용을 낼지, 어떤 반복 업무를 맡길지, 첫 납품의 범위·가격 가설을 먼저 정해 보세요. 비상업·현장·놀이 아이디어는 원래 형식의 가치를 먼저 검증해도 됩니다.</p>
      </section>
    );
  }

  const offerType = {
    'template-service': '템플릿·지원형 서비스',
    'small-program': '작은 프로그램',
    'workflow-service': '업무 운영 서비스',
  }[brief.offerType];

  return (
    <section className="mb-6 min-w-0 rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6" aria-labelledby="commercial-pilot-title">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 id="commercial-pilot-title" className="text-lg font-black text-zinc-950 dark:text-white">유료 실증안 · 아직 검증 전</h2>
          <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">제안 형태: {offerType} · 제안 갱신일 {brief.updatedAt}</p>
        </div>
        <a href="#validation-plan" className="inline-flex min-h-10 items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-primary/90 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">유료 실증 조건 정하기 ↓</a>
      </div>

      <p className="mt-4 whitespace-pre-wrap break-words text-base font-semibold leading-7 text-zinc-900 dark:text-zinc-100">{brief.offer || '고객에게 납품할 결과물을 먼저 정해야 합니다.'}</p>
      <div className="mt-4 grid gap-x-6 gap-y-3 border-t border-zinc-200 pt-3 dark:border-zinc-800 md:grid-cols-2 xl:grid-cols-3">
        <dl className="min-w-0">
          <OfferFact label="비용을 낼 고객" value={brief.buyer} />
          <OfferFact label="반복해서 맡길 업무" value={brief.recurringWork} />
          <OfferFact label="현재 쓰는 대안" value={brief.currentAlternative} />
        </dl>
        <dl className="min-w-0">
          <OfferFact label="첫 유료 실증의 납품 범위" value={brief.paidPilot.scope} />
          <OfferFact label="가격 가설 · 실제 결제 기록 아님" value={brief.paidPilot.priceHypothesis} />
          <OfferFact label="제안 기간" value={`${brief.paidPilot.durationDays}일`} />
        </dl>
        <dl className="min-w-0 md:col-span-2 xl:col-span-1">
          <OfferFact label="반복 결제를 정당화할 가치" value={brief.monthlyValue} />
          <OfferFact label="유지·지원의 포함 범위와 한계" value={brief.maintenanceBoundary} />
        </dl>
      </div>

      <dl className="mt-3 grid gap-x-6 gap-y-2 border-t border-zinc-200 pt-3 dark:border-zinc-800 md:grid-cols-2">
        <OfferFact label="다음 실증을 이어갈 조건 · 제안" value={brief.paidPilot.successCriterion} />
        <OfferFact label="중단하거나 범위를 바꿀 조건 · 제안" value={brief.paidPilot.stopCriterion} />
      </dl>

      <details className="mt-4 border-t border-zinc-200 pt-4 dark:border-zinc-800">
        <summary className="cursor-pointer text-sm font-bold text-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary dark:text-zinc-200">납품 비용·운영 책임·재사용 범위와 출처</summary>
        <dl className="mt-3 grid gap-x-6 gap-y-2 md:grid-cols-2">
          <OfferFact label="첫 고객에게 도달할 경로" value={brief.acquisition} />
          <OfferFact label="실증 전에 확인할 현재 비용" value={brief.costToVerify} />
          <OfferFact label="납품·지원 비용을 계산할 항목" value={brief.deliveryCostCheck} />
          <OfferFact label="자동화할 일과 사람이 책임질 일" value={brief.automationBoundary} />
          <OfferFact label="반복 납품에 재사용할 범위" value={brief.reuseBoundary} />
        </dl>
        <h3 className="mt-4 text-sm font-bold text-zinc-900 dark:text-zinc-100">제안을 만들 때 참고한 자료</h3>
        <p className="mt-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">유료 대안은 다른 사업자의 제안, 운영 업무 기록은 업무 사례, 공식 운영 안내는 절차 자료입니다. 어느 자료도 이 프로젝트의 결제·만족·반복 사용·재구매를 증명하지 않습니다.</p>
        {brief.evidence.length ? (
          <ul className="mt-3 divide-y divide-zinc-200 dark:divide-zinc-800">
            {brief.evidence.map((source, index) => (
              <li key={`${source.url}-${index}`} className="py-3 text-sm leading-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  {source.url ? <a className="font-semibold text-primary underline underline-offset-4 dark:text-zinc-200" href={source.url} target="_blank" rel="noreferrer">{source.label || '참고 원문'} ↗</a> : <span className="font-semibold text-zinc-800 dark:text-zinc-200">{source.label || '참고 자료'}<span className="ml-2 text-xs font-normal text-zinc-500 dark:text-zinc-400">원문 링크 없음</span></span>}
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">{evidenceKindLabels[source.kind]} · 자료 확인일 {source.checkedAt}</span>
                </div>
                <p className="mt-1 whitespace-pre-wrap break-words text-zinc-600 dark:text-zinc-300">{source.note || '참고 이유는 아직 기록되지 않았습니다.'}</p>
              </li>
            ))}
          </ul>
        ) : <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">연결된 참고 자료가 없습니다. 가격과 고객 문제를 직접 확인해야 합니다.</p>}
      </details>
    </section>
  );
}
