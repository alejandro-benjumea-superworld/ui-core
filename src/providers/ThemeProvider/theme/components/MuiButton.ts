import { isSafari } from 'react-device-detect';

import type { Components, Theme } from '@mui/material';

export const MuiButton: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    outlinedPrimary: ({ theme }) => ({
      background: theme.palette.gradient.theme,
      backgroundClip: 'text',
      borderImageSlice: 1,
      borderImageSource: theme.palette.gradient.theme,
      borderStyle: 'solid',
      borderWidth: 2,
      paddingBottom: 13,
      paddingTop: 13,
      textFillColor: isSafari ? 'none' : 'transparent',
      '&:hover': {
        borderColor: theme.palette.common.blue[400],
        borderWidth: 2,
      },
    }),
    textPrimary: ({ theme }) => ({
      background: theme.palette.gradient.theme,
      backgroundClip: 'text',
      textFillColor: 'transparent',
    }),
    containedPrimary: ({ theme }) => ({
      background: theme.palette.gradient.theme,
      color: theme.palette.common.white,
      paddingBottom: theme.spacing(2.125),
      paddingTop: theme.spacing(2.125),
      '&:disabled': {
        background: theme.palette.byName.lightGrey,
        color: theme.palette.common.white,
      },
    }),
    root: {
      borderRadius: 0,
    },
  },
};
