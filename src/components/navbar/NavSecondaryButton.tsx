// @next
import NextLink from 'next/link';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';

/***************************  NAVBAR - SECONDARY BUTTON  ***************************/

export default function NavSecondaryButton({ sx, children, ...rest }: ButtonProps) {
  return (
    <Button
      variant="outlined"
      size="small"
      sx={sx}
      {...rest}
      {...(rest?.href && { component: NextLink })}
      rel="noopener noreferrer"
      aria-label="nav-secondary-btn"
    >
      {children || 'Secondary Button'}
    </Button>
  );
}
