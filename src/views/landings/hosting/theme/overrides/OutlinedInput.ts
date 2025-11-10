// @mui
import { Theme } from '@mui/material/styles';

/***************************  OVERRIDES - OUTLINE INPUT  ***************************/

export default function OutlinedInput(theme: Theme) {
  return {
    MuiOutlinedInput: {
      defaultProps: {
        autoComplete: 'off'
      },
      styleOverrides: {
        root: {
          fontSize: 16,
          fontWeight: 500,
          borderRadius: 16
        },
        notchedOutline: {
          borderColor: theme.palette.grey[600]
        },
        input: {
          '&::placeholder': { ...theme.typography.caption2, color: theme.palette.grey[800], opacity: 0.5 }
        }
      }
    }
  };
}
