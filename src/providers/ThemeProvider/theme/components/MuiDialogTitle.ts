import type { Components, Theme } from '@mui/material';

export const MuiDialogTitle: Components<Theme>['MuiDialogTitle'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontWeight: theme.typography.fontWeightBold,
    }),
  },
};
