import type { Components, Theme } from '@mui/material';

export const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: 0,
      '&:not(.Mui-error)&:hover': {
        '& fieldset': {
          borderColor: `${theme.palette.byName.frost} !important`,
        },
      },
    }),
    input: ({ theme }) => ({
      '&::placeholder': {
        color: theme.palette.byName.navy,
      },
    }),
    notchedOutline: ({ theme }) => ({
      borderColor: theme.palette.byName.frost,
      top: 0,

      '& legend': {
        display: 'none',
      },
    }),
  },
};
