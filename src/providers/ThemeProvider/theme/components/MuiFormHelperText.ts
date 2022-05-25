import type { Components, Theme } from '@mui/material';

export const MuiFormHelperText: Components<Theme>['MuiFormHelperText'] = {
  styleOverrides: {
    contained: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
};
