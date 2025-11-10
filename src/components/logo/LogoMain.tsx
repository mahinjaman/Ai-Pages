'use client';

// @mui
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Logo from '../../../public/assets/default/StoreLine-Logo.png';

// @project
import branding from '@/branding.json';
import Image from 'next/image';

/***************************  LOGO - MAIN  ***************************/
export default function LogoMain() {
  const logoMainPath = branding.logo.main;
  
  return logoMainPath ? (
    <CardMedia src={logoMainPath} component="img" alt="logo" sx={{ width: { xs: 112, lg: 140 } }} loading="lazy" />
  ) : (
    <Box>
      <Image src={Logo} alt="logo" width={170} height={70} />
    </Box>
  );
}
