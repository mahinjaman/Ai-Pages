'use client';

// @mui
import Box from '@mui/material/Box';

// @project
import useDataThemeMode from '@/hooks/useDataThemeMode';

// @types
import { ChildrenProps } from '@/types/root';

/***************************  LAYOUT - BLOCKS  ***************************/

export default function Blocks({ children }: ChildrenProps) {
  useDataThemeMode();

  return <Box sx={{ '& :focus-visible': { outline: 'none' } }}>{children}</Box>;
}
