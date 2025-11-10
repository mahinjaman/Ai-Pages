// @next
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Career = dynamic(() => import('@/views/landings/default/career'));

/***************************  METADATA - CAREER  ***************************/

export const metadata: Metadata = { ...SEO_CONTENT.careerPage };

/***************************  PAGE - CAREER  ***************************/

export default function CareerPage() {
  return <Career />;
}
