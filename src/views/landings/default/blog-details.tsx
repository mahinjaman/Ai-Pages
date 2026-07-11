'use client';

import { useEffect, useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';
import { getBlog, getSimilarBlogs, blogContentToHtml, formatDay, ApiBlog } from '@/lib/blog-api';

// Prose styling for the rendered HTML content.
const proseSx = {
  color: 'text.primary',
  fontSize: '1.075rem',
  lineHeight: 1.85,
  '& > :first-of-type': { mt: 0 },
  '& h1, & h2, & h3, & h4': { fontWeight: 700, lineHeight: 1.3, mt: '1.6em', mb: '.5em' },
  '& h2': { fontSize: '1.7rem' },
  '& h3': { fontSize: '1.35rem' },
  '& p': { my: '1em' },
  '& a': { color: 'primary.main', textDecoration: 'underline' },
  '& img': { maxWidth: '100%', height: 'auto', borderRadius: 3, my: '1.5em' },
  '& ul, & ol': { my: '1em', pl: '1.5rem' },
  '& li': { my: '.4em' },
  '& blockquote': {
    borderLeft: '4px solid',
    borderColor: 'primary.main',
    bgcolor: 'grey.100',
    borderRadius: 2,
    px: 3,
    py: 1,
    my: '1.5em',
    fontStyle: 'italic'
  },
  '& code': { bgcolor: 'grey.100', px: 0.75, py: 0.25, borderRadius: 1, fontSize: '0.9em' },
  '& pre': { bgcolor: 'grey.900', color: 'grey.100', p: 2, borderRadius: 2, overflowX: 'auto', my: '1.5em' },
  '& pre code': { bgcolor: 'transparent', p: 0 }
};

/***************************  SMALL BLOG CARD (similar)  ***************************/

function SimilarCard({ blog }: { blog: ApiBlog }) {
  return (
    <Stack
      component={NextLink}
      href={`/blog/${blog.blog_id}`}
      sx={{ gap: 1, textDecoration: 'none', color: 'inherit', '&:hover .t': { color: 'primary.main' } }}
    >
      <Box
        component="img"
        src={blog.banner}
        alt={blog.title}
        sx={{ width: 1, aspectRatio: '16 / 9', objectFit: 'cover', borderRadius: 3 }}
      />
      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
        {formatDay(blog.publishedAt)}
      </Typography>
      <Typography
        className="t"
        variant="h6"
        sx={{ fontWeight: 700, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
      >
        {blog.title}
      </Typography>
    </Stack>
  );
}

/***************************  PAGE - BLOG DETAILS  ***************************/

export default function BlogDetailsView({ slug }: { slug: string }) {
  const [blog, setBlog] = useState<ApiBlog | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [similar, setSimilar] = useState<ApiBlog[]>([]);
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    setBlog(null);
    setNotFound(false);
    getBlog(slug)
      .then((b) => {
        if (!b) {
          setNotFound(true);
          return;
        }
        setBlog(b);
        if (b.tags?.[0]) getSimilarBlogs(b.tags[0], slug).then(setSimilar);
      })
      .catch(() => setNotFound(true));
  }, [slug]);

  useEffect(() => {
    if (typeof window !== 'undefined') setShareUrl(window.location.href);
  }, [slug, blog]);

  const copyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) navigator.clipboard.writeText(shareUrl);
  };

  if (notFound) {
    return (
      <ContainerWrapper sx={{ py: { xs: 8, md: 12 } }}>
        <Stack sx={{ alignItems: 'center', gap: 2, textAlign: 'center' }}>
          <Typography variant="h3">Post not found</Typography>
          <Typography sx={{ color: 'text.secondary' }}>The post you’re looking for doesn’t exist or was removed.</Typography>
          <Button component={NextLink} href="/blog" variant="contained">
            Back to Blog
          </Button>
        </Stack>
      </ContainerWrapper>
    );
  }

  if (!blog) {
    return (
      <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
        <Stack sx={{ maxWidth: 860, mx: 'auto', gap: 2 }}>
          <Skeleton width="30%" height={24} />
          <Skeleton width="90%" height={56} />
          <Skeleton width="60%" height={40} />
          <Skeleton variant="rounded" height={380} sx={{ borderRadius: 4, mt: 2 }} />
        </Stack>
      </ContainerWrapper>
    );
  }

  const info = blog.author?.personal_info || { fullname: '', username: '', profile_img: '' };
  const role = blog.categories?.[0] || 'Author';
  const html = blogContentToHtml(blog);
  const encoded = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(blog.title || '');

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ maxWidth: 860, mx: 'auto', gap: { xs: 3, md: 4 } }}>
        {/* Header */}
        <Stack sx={{ gap: 2 }}>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            {formatDay(blog.publishedAt)}
          </Typography>
          <Typography variant="h2">{blog.title}</Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            sx={{ justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: 1.5, mt: 0.5 }}
          >
            <Stack
              component={NextLink}
              href={`/user/${info.username}`}
              direction="row"
              sx={{ gap: 1.25, alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
            >
              <Avatar src={info.profile_img} alt={info.fullname} sx={{ width: 46, height: 46 }} />
              <Stack>
                <Typography sx={{ fontWeight: 700, textTransform: 'capitalize' }}>{info.fullname}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
                  {role}
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="row" sx={{ gap: 0.5 }}>
              <IconButton
                component="a"
                href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href={`https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton onClick={copyLink} aria-label="Copy link">
                <LinkIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>

        {/* Hero */}
        <Box
          component="img"
          src={blog.banner}
          alt={blog.title}
          sx={{ width: 1, aspectRatio: { xs: '16 / 9', md: '2 / 1' }, objectFit: 'cover', borderRadius: 4 }}
        />

        {/* Content */}
        <Box sx={proseSx} dangerouslySetInnerHTML={{ __html: html }} />

        {/* Tags */}
        {blog.tags?.length ? (
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, mt: 1 }}>
            {blog.tags.map((t) => (
              <Chip key={t} label={`#${t}`} variant="outlined" size="small" sx={{ textTransform: 'capitalize' }} />
            ))}
          </Stack>
        ) : null}
      </Stack>

      {/* Similar */}
      {similar.length > 0 && (
        <Box sx={{ maxWidth: 860, mx: 'auto', mt: { xs: 6, md: 8 } }}>
          <Divider sx={{ mb: 4 }} />
          <Typography variant="h4" sx={{ mb: 3 }}>
            Similar posts
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 3 }}>
            {similar.slice(0, 3).map((b) => (
              <Box key={b.blog_id} sx={{ flex: 1 }}>
                <SimilarCard blog={b} />
              </Box>
            ))}
          </Stack>
        </Box>
      )}
    </ContainerWrapper>
  );
}
