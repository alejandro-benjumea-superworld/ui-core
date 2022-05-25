import type { Components, Theme } from '@mui/material';

export const MuiSlider: Components<Theme>['MuiSlider'] = {
  styleOverrides: {
    root: {
      padding: 0,
    },
    rail: ({ theme }) => ({
      height: 4,
      background: theme.palette.byOpacity.black[5],
    }),
    track: ({ theme }) => ({
      height: 4,
      background: theme.palette.gradient.theme,
      border: 'none',
    }),
    thumb: ({ theme }) => ({
      width: 12,
      height: 12,
      border: `1px solid ${theme.palette.common.white}`,
      '&[data-index="0"]': {
        background: theme.palette.byName.arctic,
      },
      '&[data-index="1"]': {
        background: theme.palette.byName.royalBlue,
      },
    }),
  },
};
