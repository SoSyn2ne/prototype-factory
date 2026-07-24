import LabBanner from '@/components/LabBanner';
import WegovyRealityLedger from './WegovyRealityLedger';

export const metadata = {
  title: 'Wegovy Reality Ledger — PF Lab',
  description: 'Interactive prototype: cost-per-kg + continue/taper/stop decision for GLP-1 users.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#22201c]">
      <LabBanner
        id="2026-07-09-p010"
        title="Wegovy Reality Ledger"
        stage="Stage 5 — Interactive prototype (real logic, mock data)"
      />
      <WegovyRealityLedger />
    </main>
  );
}
