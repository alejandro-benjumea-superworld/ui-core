import createPalette from '@mui/material/styles/createPalette';

import { blue } from './colors/blue';
import { byName } from './colors/byName';
import { byOpacity } from './colors/byOpacity';
import { gradient } from './gradient';

declare module '@mui/material/styles/createPalette' {
  type Color = {
    200: string;
    400: string;
    600: string;
    800: string;
    900: string;
  };

  export interface CommonColors {
    blue: Color;
  }
  export interface Palette {
    byName: typeof byName;
    byOpacity: typeof byOpacity;
    gradient: typeof gradient;
  }

  export interface PaletteOptions {
    byName?: Partial<Palette['byName']>;
    byOpacity?: Partial<Palette['byOpacity']>;
    gradient?: Partial<Palette['gradient']>;
  }
}

export const palette = createPalette({
  byName,
  byOpacity,
  common: {
    blue,
  },
  gradient,
  error: {
    main: '#FF0000',
  },
});
