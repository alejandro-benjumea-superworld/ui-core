import type { Components, Theme } from '@mui/material';

export const MuiPaginationItem: Components<Theme>['MuiPaginationItem'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.common.black,

      '&:hover': {
        backgroundColor: 'transparent',
      },

      '&.Mui-selected': {
        color: theme.palette.byName.royalBlue,
        backgroundColor: 'transparent',
      },

      '&.Mui-selected:hover': {
        backgroundColor: 'transparent',
      },
    }),
    previousNext: {
      '& svg': {
        width: '1.2em',
        height: '1.2em',
      },
    },
  },
};
