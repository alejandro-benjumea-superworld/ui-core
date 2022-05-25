import type { Components, Theme } from '@mui/material';

export const MuiLink: Components<Theme>['MuiLink'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.byName.royalBlue,
      fontWeight: theme.typography.fontWeightSemiBold,
      textDecoration: 'none',
    }),
  },
};
