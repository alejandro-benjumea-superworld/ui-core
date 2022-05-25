import { isSafari } from 'react-device-detect';

import type { Components, Theme } from '@mui/material';

export const MuiButton: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    outlinedPrimary: ({ theme }) => ({
      background: theme.palette.gradient.blue1,
      backgroundClip: 'text',
      borderImageSlice: 1,
      borderImageSource: theme.palette.gradient.blue1,
      borderStyle: 'solid',
      borderWidth: 2,
      paddingBottom: 13,
      paddingTop: 13,
      textFillColor: isSafari ? 'none' : 'transparent',
      '&:hover': {
        borderColor: theme.palette.common.blue[300],
        borderWidth: 2,
      },
    }),
    textPrimary: ({ theme }) => ({
      background: theme.palette.gradient.blue1,
      backgroundClip: 'text',
      textFillColor: 'transparent',
    }),
    containedPrimary: ({ theme }) => ({
      background: theme.palette.gradient.blue1,
      color: theme.palette.common.white,
      paddingBottom: theme.spacing(2.125),
      paddingTop: theme.spacing(2.125),
      '&:disabled': {
        background: theme.palette.gradient.blue1Disabled,
        color: theme.palette.common.white,
      },
    }),
    root: {
      borderRadius: 0,
    },
  },
};
