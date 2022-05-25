import type { Components, Theme } from '@mui/material';

import { palette } from '../palette';

export const MuiCssBaseline: Components<Theme>['MuiCssBaseline'] = {
  styleOverrides: {
    '#root': {
      height: '100%',
    },
    html: {
      height: '100%',
    },
    body: {
      height: '100%',
      lineHeight: '1.2',
      backgroundColor: palette.byName.porcelain,
      '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
        width: '5px',
        height: '5px',
      },
      '&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track': {
        backgroundColor: palette.common.white,
      },
      '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
        backgroundColor: palette.byName.darkGrey,
        borderRadius: '5px',
      },
      '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
        backgroundColor: palette.byName.scorpion,
      },
    },
  },
};
