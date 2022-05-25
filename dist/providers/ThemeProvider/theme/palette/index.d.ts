import { byName } from './colors/byName';
import { byOpacity } from './colors/byOpacity';
import { gradient } from './gradient';
declare module '@mui/material/styles/createPalette' {
    type Color = {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    interface CommonColors {
        blue: Color;
    }
    interface Palette {
        byName: typeof byName;
        byOpacity: typeof byOpacity;
        gradient: typeof gradient;
    }
    interface PaletteOptions {
        byName?: Partial<Palette['byName']>;
        byOpacity?: Partial<Palette['byOpacity']>;
        gradient?: Partial<Palette['gradient']>;
    }
}
export declare const palette: import("@mui/material/styles/createPalette").Palette;
