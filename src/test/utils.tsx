/* eslint-disable import/no-extraneous-dependencies */
import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { ThemeProvider } from '../providers/ThemeProvider';

const AllTheProviders: FC = ({ children }: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
