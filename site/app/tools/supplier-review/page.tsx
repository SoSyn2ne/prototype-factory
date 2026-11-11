import SiteShell from '@/components/SiteShell';
import SupplierReviewClient from '@/components/supplier-review/SupplierReviewClient';

export const metadata = {
  title: '공급사 상품 변경 검수 — Prototype Factory',
  description: '두 상품 파일을 비교하고 승인한 변경 목록을 내려받습니다.',
};

export default function SupplierReviewPage() {
  return <SiteShell><SupplierReviewClient /></SiteShell>;
}
