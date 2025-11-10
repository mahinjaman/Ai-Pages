'use client';

// @mui
import Box from '@mui/material/Box';

// @project
import { Footer6 } from '@/blocks/footer';
import { Navbar10 } from '@/blocks/navbar';
import { NavbarContent10 } from '@/blocks/navbar/navbar-content';

// @data
import { navbar } from './data';

// @types
import { ChildrenProps } from '@/types/root';

const headerColor = { bgcolor: 'grey.100' };

/***************************  LAYOUT - MAIN  ***************************/

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <>
      {/* header section */}
      <Box sx={headerColor}>
        <Navbar10 triggerSX={headerColor}>
          <NavbarContent10 {...navbar} />
        </Navbar10>
      </Box>

      {/* app/(landing)/* */}
      {children}

      {/* footer section */}
      <Footer6 />
    </>
  );
}
