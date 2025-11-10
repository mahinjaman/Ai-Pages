'use client';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'motion/react';

// @project
import branding from '@/branding.json';
import { MegaMenuType } from '@/enum';
import { BUY_NOW_URL, PAGE_PATH } from '@/path';

/***************************  MEGAMENU 4 - FOOTER  ***************************/

function FooterData() {
  const theme = useTheme();

  return (
    <Stack direction={{ sm: 'row' }} sx={{ gap: 1.5, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' } }}>
      <Stack sx={{ gap: 1 }}>
        <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
          <Typography variant="h5">Explore our range of landing demos tailored to suit your needs</Typography>
          <Chip
            label="Featured"
            size="small"
            slotProps={{ label: { sx: { pl: 1.25, pr: 1.5, py: 0.5, typography: 'caption', my: 0.2 } } }}
            sx={{ bgcolor: 'background.default', display: { xs: 'none', sm: 'inline-flex' } }}
            icon={
              <CardMedia
                component="img"
                image="/assets/images/shared/celebration.svg"
                sx={{ width: 16, height: 16, pl: 0.5 }}
                alt="celebration"
                loading="lazy"
              />
            }
          />
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {branding.brandName} offers 200+ customizable blocks, empowering you to effortlessly design and build landing pages tailored to
          your product or service needs.
        </Typography>
      </Stack>
      <motion.div
        initial={{ borderRadius: '50px' }}
        animate={{
          boxShadow: [
            `0px 0px 0px 0px ${alpha(theme.palette.primary.main, 0.7)}`,
            `0px 0px 0px 8px ${alpha(theme.palette.primary.main, 0)}`,
            `0px 0px 0px 0px ${alpha(theme.palette.primary.main, 0)}`
          ],
          borderRadius: '50px'
        }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
      >
        <Button
          variant="contained"
          sx={{ display: { xs: 'none', sm: 'inline-flex' }, minWidth: 100, px: { xs: 2 }, py: 1.25 }}
          href={BUY_NOW_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Now
        </Button>
      </motion.div>
    </Stack>
  );
}

/***************************  NAVBAR - MEGAMENU LANDINGS  ***************************/

export const landingMegamenu = {
  id: 'landings',
  title: 'Landings',
  megaMenu: {
    type: MegaMenuType.MEGAMENU4,
    popperOffsetX: 195,
    toggleBtn: { children: 'Landings' },
    footerData: <FooterData />
  }
};

/***************************  MEGAMENU 5 - BANNER  ***************************/

// function BannerData() {
//   const theme = useTheme();
//   return (
//     <Stack sx={{ alignItems: 'flex-start', gap: 3, height: 1, justifyContent: 'center' }}>
//       <Stack sx={{ gap: 1 }}>
//         <Stack sx={{ alignItems: 'flex-start', gap: 1.5 }}>
//           <Chip
//             label={`${branding.brandName} Admin Template`}
//             icon={
//               <CardMedia
//                 component="img"
//                 image="/assets/images/shared/celebration.svg"
//                 sx={{ width: 16, height: 16 }}
//                 alt="celebration"
//                 loading="lazy"
//               />
//             }
//             size="small"
//             slotProps={{ label: { sx: { px: 1.5, py: 0.5, typography: 'subtitle2' } } }}
//             sx={{ bgcolor: 'background.default', '& .MuiChip-icon': { ml: 1.25 } }}
//           />
//           <Typography variant="h5">Stunning dashboards designed to meet your needs.</Typography>
//         </Stack>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//           Effortlessly manage your app’s backend with customizable admin dashboards that enhance productivity.
//         </Typography>
//       </Stack>

//       <motion.div
//         initial={{ borderRadius: '50px' }}
//         animate={{
//           boxShadow: [
//             `0px 0px 0px 0px ${alpha(theme.palette.primary.main, 0.7)}`,
//             `0px 0px 0px 8px ${alpha(theme.palette.primary.main, 0)}`,
//             `0px 0px 0px 0px ${alpha(theme.palette.primary.main, 0)}`
//           ],
//           borderRadius: '50px'
//         }}
//         transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
//       >
//         <Button href={ADMIN_PATH} variant="contained" sx={{ minWidth: 92, px: { xs: 2 }, py: 1.25 }}>
//           View Dashboard
//         </Button>
//       </motion.div>
//     </Stack>
//   );
// }

/***************************  NAVBAR - MEGAMENU PAGES  ***************************/

export const pagesMegamenu = {
  id: 'resources',
  title: 'Resources',
  megaMenu: {
    type: MegaMenuType.MEGAMENU5,
    toggleBtn: { children: 'Resources' },
    popperWidth: 360,
    menuItems: [
      {
        title: 'Resources',
        itemsList: [
          { title: 'Blog', link: { href: PAGE_PATH.blogPage } },
          { title: 'Success Stories', link: { href: PAGE_PATH.successStoryPage } },
          { title: 'About us', link: { href: PAGE_PATH.aboutPage } },
          { title: 'Contact Us', link: { href: PAGE_PATH.contactPage } }
        ]
      }
    ]
    // bannerData: <BannerData />
  }
};
