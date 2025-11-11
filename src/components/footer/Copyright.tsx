'use client';

// @next
import NextLink from 'next/link';

// @mui
import Link, { LinkProps } from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

//@project
import branding from '@/branding.json';
import { CopyrightType } from '@/enum';

interface Props {
  type?: CopyrightType;
  isDivider?: boolean;
  textProps?: LinkProps;
}

/***************************  FOOTER - COPYRIGHT  ***************************/

export default function Copyright({ type = CopyrightType.TYPE1, textProps, isDivider = true }: Props) {
  const linkProps: LinkProps = {
    component: NextLink,
    variant: 'caption2',
    color: 'text.secondary',
    target: '_blank',
    rel: 'noopener noreferrer',
    underline: 'hover',
    'aria-label': 'Opens in a new tab',
    ...textProps,
    sx: { '&:hover': { color: 'primary.main' }, ...textProps?.sx }
  };

  return (
    <Stack
      direction={{ sm: 'row' }}
      sx={{ alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-end' }, gap: { xs: 1.5, sm: isDivider ? 1.5 : 3 } }}
    >
      <Typography variant="caption2" {...textProps} sx={{ color: 'text.secondary', ...textProps?.sx }}>
        Copyright © 2025
        <Link {...linkProps} href={branding.company.url} sx={{ ...linkProps.sx, ml: 0.5 }}>
          {branding.company.name}
        </Link>
      </Typography>
    </Stack>
  );
}
