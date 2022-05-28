/// <reference types="react" />
import { ThemeOptions } from '@mui/material';
export declare const typography: ThemeOptions['typography'];
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
