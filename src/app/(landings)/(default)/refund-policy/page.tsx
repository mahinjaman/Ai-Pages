// @next
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const RefundPolicy = dynamic(() => import('@/views/landings/default/refund-policy'));

/***************************  METADATA - REFUND POLICY  ***************************/

export const metadata: Metadata = {
  ...SEO_CONTENT.refundPolicy,
  openGraph: { ...SEO_CONTENT.refundPolicy, url: PAGE_PATH.refundPolicyPage }
};

/*************************** PAGE - REFUND POLICY ***************************/

export default function RefundPolicyPage() {
  return <RefundPolicy />;
}
