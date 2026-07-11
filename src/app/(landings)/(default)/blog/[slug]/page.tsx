// @next
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const BlogDetailsView = dynamic(() => import('@/views/landings/default/blog-details'));

/***************************  METADATA - BLOG DETAILS  ***************************/

export const metadata: Metadata = { ...SEO_CONTENT.blogDetails };

/***************************  PAGE - BLOG DETAILS  ***************************/

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogDetailsView slug={slug} />;
}
