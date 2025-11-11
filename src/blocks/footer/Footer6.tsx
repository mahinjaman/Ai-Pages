// @mui
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Link, { LinkProps } from '@mui/material/Link'; // ✅ use MUI Link
import { useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material/styles';

// @next
import NextLink from 'next/link';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { Copyright, FollowUS } from '@/components/footer';
import LogoSection from '@/components/logo';
import { CopyrightType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  FOOTER - 6  ***************************/
export default function Footer6() {
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const linkProps: LinkProps = {
    component: NextLink, // ✅ works with MUI Link
    variant: 'caption2',
    color: 'text.secondary',
    underline: 'hover',
    sx: { '&:hover': { color: 'primary.main' } }
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack id="footer-6" role="contentinfo" aria-label="Footer 6" sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        <Stack sx={{ alignItems: 'center', justifyContent: 'center', gap: { xs: 2, sm: 3 } }}>
          <LogoSection />
          <Stack direction={downSM ? 'column' : 'row'} sx={{ gap: { xs: downSM ? 3 : 1.5 }, alignItems: 'center' }}>
            <Link {...linkProps} href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link {...linkProps} href="/terms-condition">
              Terms & Conditions
            </Link>
            <Link {...linkProps} href="/refund-policy">
              Refund Policy
            </Link>
          </Stack>
        </Stack>

        <Divider />

        <Stack
          direction={{ md: 'row' }}
          sx={{
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'space-between' },
            gap: 4
          }}
        >
          <FollowUS heading={false} color="background.default" />
          <Copyright type={CopyrightType.TYPE2} isDivider={false} />
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}
