import type { Components, Theme } from '@mui/material';

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    root: {
      borderRadius: 0,
    },
    input: ({ theme }) => ({
      backgroundColor: theme.palette.common.white,
      '&::placeholder': {
        color: theme.palette.byName.deepSapphire,
      },
    }),
  },
};
