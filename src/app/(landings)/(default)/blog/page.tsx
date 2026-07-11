// @next
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const BlogListView = dynamic(() => import('@/views/landings/default/blog'));

/***************************  METADATA - BLOG  ***************************/

export const metadata: Metadata = { ...SEO_CONTENT.blogPage };

/***************************  PAGE - BLOG  ***************************/

export default function BlogPage() {
  return <BlogListView />;
}
