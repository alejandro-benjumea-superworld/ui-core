import type { Components, Theme } from '@mui/material';

export const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: 0,
      '&:not(.Mui-error)&:hover': {
        '& fieldset': {
          borderColor: `${theme.palette.byName.cadetBlue} !important`,
        },
      },
    }),
    input: ({ theme }) => ({
      '&::placeholder': {
        color: theme.palette.byName.deepSapphire,
      },
    }),
    notchedOutline: ({ theme }) => ({
      borderColor: theme.palette.byName.cadetBlue,
      top: 0,

      '& legend': {
        display: 'none',
      },
    }),
  },
};
