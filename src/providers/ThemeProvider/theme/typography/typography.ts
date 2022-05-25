import { createTheme, ThemeOptions } from '@mui/material';

import { AVENIR_NEXT, OPEN_SANS } from './typography.constants';
import { fallbackFont } from './typography.utils';
import { palette } from '../palette';

const theme = createTheme();

export const typography: ThemeOptions['typography'] = {
  fontFamily: fallbackFont(AVENIR_NEXT),
  body1: {
    color: 'rgba(0, 0, 0, 0.60)',
    fontFamily: fallbackFont(OPEN_SANS),
    fontSize: '17.5px',
    fontWeight: theme.typography.fontWeightRegular,
    letterSpacing: 0.5,
    lineHeight: '1.25',
  },
  fontWeightSemiBold: 600,
  // body2: {
  //   color: '',
  //   fontFamily: fallbackFont(),
  //   fontSize: '',
  //   fontWeight: 0,
  //   letterSpacing: 0,
  //   lineHeight: '',
  // },
  button: {
    fontFamily: fallbackFont(AVENIR_NEXT),
    fontSize: '18px',
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: '1.25',
    textTransform: 'capitalize',
  },
  // caption: {
  //   fontFamily: fallbackFont(),
  //   fontSize: '',
  //   fontWeight: 0,
  //   letterSpacing: 0,
  //   lineHeight: '',
  // },
  // h1: {
  //   color: '',
  //   fontFamily: fallbackFont(),
  //   fontSize: '',
  //   fontWeight: 0,
  //   letterSpacing: 0,
  //   lineHeight: '',
  // },
  h2: {
    color: palette.common.black,
    fontFamily: fallbackFont(AVENIR_NEXT),
    fontSize: '18px',
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: 0,
    lineHeight: '1.5',
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
    },
  },
  // h3: {
  //   color: '',
  //   fontFamily: fallbackFont(),
  //   fontSize: '',
  //   fontWeight: 0,
  //   letterSpacing: 0,
  //   lineHeight: '',
  // },
  // h4: {
  //   color: '',
  //   fontFamily: fallbackFont(),
  //   fontSize: '',
  //   fontWeight: 0,
  //   letterSpacing: 0,
  //   lineHeight: '',
  // },
  // h5: {
  //   color: '',
  //   fontFamily: fallbackFont(),
  //   fontSize: '',
  //   fontWeight: 0,
  //   letterSpacing: 0,
  //   lineHeight: '',
  // },
  // h6: {
  //   color: '',
  //   fontFamily: fallbackFont(),
  //   fontSize: '',
  //   fontWeight: 0,
  //   letterSpacing: 0,
  //   lineHeight: '',
  // },
  // overline: {
  //   fontFamily: fallbackFont(),
  //   fontSize: '',
  //   fontWeight: 0,
  //   letterSpacing: 0,
  //   lineHeight: '',
  // },
  // subtitle1: {
  //   color: '',
  //   fontFamily: fallbackFont(),
  //   fontSize: '',
  //   fontWeight: 0,
  //   letterSpacing: 0,
  //   lineHeight: '',
  // },
  // subtitle2: {
  //   color: '',
  //   fontFamily: fallbackFont(),
  //   fontSize: '',
  //   fontWeight: 0,
  //   letterSpacing: 0,
  //   lineHeight: '',
  // },
  button2: {
    color: palette.common.black,
    fontFamily: fallbackFont(AVENIR_NEXT),
    fontSize: '20px',
    fontWeight: 600,
    letterSpacing: 0,
  },
};

declare module '@mui/material/styles/createTypography' {
  interface FontStyle {
    fontWeightSemiBold: CSSProperties['fontWeight'];
  }

  interface Typography {
    button2: React.CSSProperties;
  }

  interface TypographyOptions {
    button2?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    button2: true;
  }
}
