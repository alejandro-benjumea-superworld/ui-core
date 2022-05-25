import type { Components, Theme } from '@mui/material';

export const MuiInputLabel: Components<Theme>['MuiInputLabel'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      alignItems: 'center',
      color: theme.palette.byName.frost,
      display: 'flex',
      fontSize: 14,
      height: 24,
      lineHeight: 1,
      marginBottom: theme.spacing(0.5),
      position: 'inherit',
      transform: 'none',

      '&.Mui-error': {
        color: theme.palette.byName.frost,
      },
    }),
  },
};
