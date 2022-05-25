import { CacheProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import createCache from '@emotion/cache';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import type { FC } from 'react';
import type { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';

import { theme } from './theme';

const cache = createCache({
  key: 'css',
  prepend: true,
});

export const ThemeProvider: FC<Partial<ThemeProviderProps>> = (props) => {
  const { children, ...rest } = props;
  return (
    <CacheProvider value={cache}>
      <MuiThemeProvider theme={theme} {...rest}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  );
};
