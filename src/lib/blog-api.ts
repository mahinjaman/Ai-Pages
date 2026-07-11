// Thin client for the existing Express blog backend.
import axios from 'axios';

export const SERVER = process.env.NEXT_PUBLIC_SERVER_DOMAIN || 'http://localhost:3000';

export interface ApiAuthor {
  personal_info: { fullname: string; username: string; profile_img: string };
}

export interface ApiBlog {
  _id?: string;
  blog_id: string;
  title: string;
  des: string;
  banner: string;
  tags: string[];
  categories?: string[];
  content?: string | string[] | { blocks?: Array<{ type?: string; data?: { text?: string } }> };
  contentFormat?: 'html' | 'markdown' | 'editorjs';
  activity: { total_likes: number; total_comments?: number; total_reads?: number };
  publishedAt: string;
  author: ApiAuthor;
}

export async function getLatestBlogs(page = 1): Promise<ApiBlog[]> {
  const { data } = await axios.post(`${SERVER}/latest-blogs`, { page });
  return data?.blogs || [];
}

export async function getBlog(blog_id: string): Promise<ApiBlog> {
  const { data } = await axios.post(`${SERVER}/get-blog`, { blog_id });
  return data.blog;
}

export async function getSimilarBlogs(tag: string, eliminate_blog: string): Promise<ApiBlog[]> {
  try {
    const { data } = await axios.post(`${SERVER}/search-blogs`, { tag, limit: 6, eliminate_blog });
    return data?.blogs || [];
  } catch {
    return [];
  }
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatDay(iso?: string): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

// Normalise stored blog content into an HTML string for rendering.
export function blogContentToHtml(blog: ApiBlog): string {
  const { content, contentFormat } = blog;
  const raw = Array.isArray(content) ? content[0] : content;

  if (contentFormat === 'html' || contentFormat === 'markdown') {
    // New posts are stored as HTML. Markdown-format legacy posts are rare;
    // they render acceptably as text if not pre-converted.
    return typeof raw === 'string' ? raw : '';
  }

  // Legacy Editor.js block array — flatten the text of each block.
  if (raw && typeof raw === 'object' && 'blocks' in raw && Array.isArray(raw.blocks)) {
    return raw.blocks.map((b) => (b?.data?.text ? `<p>${b.data.text}</p>` : '')).join('');
  }

  return typeof raw === 'string' ? raw : '';
}
