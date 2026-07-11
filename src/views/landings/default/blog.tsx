'use client';

import { useEffect, useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';
import { getLatestBlogs, formatDay, ApiBlog } from '@/lib/blog-api';

const clamp = (lines: number) => ({
  display: '-webkit-box',
  WebkitLineClamp: lines,
  WebkitBoxOrient: 'vertical' as const,
  overflow: 'hidden'
});

/***************************  BLOG CARD  ***************************/

function BlogCard({ blog }: { blog: ApiBlog }) {
  const info = blog.author?.personal_info || { fullname: '', username: '', profile_img: '' };
  const category = blog.categories?.[0];

  return (
    <Card
      sx={{
        height: 1,
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: 'none',
        transition: 'box-shadow .3s ease, transform .3s ease',
        '&:hover': { boxShadow: 3, transform: 'translateY(-4px)' }
      }}
    >
      <CardActionArea
        component={NextLink}
        href={`/blog/${blog.blog_id}`}
        sx={{ height: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
      >
        <Box sx={{ position: 'relative' }}>
          <CardMedia component="img" image={blog.banner} alt={blog.title} sx={{ aspectRatio: '16 / 9', objectFit: 'cover' }} />
          {category && (
            <Chip
              label={category}
              size="small"
              color="primary"
              sx={{ position: 'absolute', top: 12, left: 12, textTransform: 'capitalize', fontWeight: 600 }}
            />
          )}
        </Box>
        <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1, p: 2.5, width: 1 }}>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {formatDay(blog.publishedAt)}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, ...clamp(2) }}>
            {blog.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1, ...clamp(2) }}>
            {blog.des}
          </Typography>
          <Stack direction="row" sx={{ gap: 1, alignItems: 'center', mt: 1 }}>
            <Avatar src={info.profile_img} alt={info.fullname} sx={{ width: 28, height: 28 }} />
            <Typography variant="caption" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
              {info.fullname}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

/***************************  PAGE - BLOG LIST  ***************************/

export default function BlogListView() {
  const [blogs, setBlogs] = useState<ApiBlog[] | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    getLatestBlogs(1)
      .then((b) => {
        setBlogs(b);
        setHasMore(b.length >= 5);
      })
      .catch(() => setBlogs([]));
  }, []);

  const loadMore = async () => {
    setLoadingMore(true);
    try {
      const next = page + 1;
      const more = await getLatestBlogs(next);
      setBlogs((prev) => [...(prev || []), ...more]);
      setPage(next);
      setHasMore(more.length >= 5);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Stack sx={{ gap: 1 }}>
          <Typography variant="h2">Blog</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Latest stories, guides and updates from StoreLine.
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {blogs === null
            ? Array.from({ length: 6 }).map((_, i) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                  <Skeleton variant="rounded" height={340} sx={{ borderRadius: 4 }} />
                </Grid>
              ))
            : blogs.map((b) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={b.blog_id}>
                  <BlogCard blog={b} />
                </Grid>
              ))}
        </Grid>

        {blogs && blogs.length === 0 && (
          <Typography sx={{ color: 'text.secondary', textAlign: 'center', py: 6 }}>No blog posts yet.</Typography>
        )}

        {blogs && blogs.length > 0 && hasMore && (
          <Box sx={{ textAlign: 'center', pt: 1 }}>
            <Button variant="outlined" size="large" onClick={loadMore} disabled={loadingMore}>
              {loadingMore ? 'Loading…' : 'Load more'}
            </Button>
          </Box>
        )}
      </Stack>
    </ContainerWrapper>
  );
}
