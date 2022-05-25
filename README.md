## UI Core

This package hosts React components, hooks and core utils that can be used for creating custom design systems.

## Install

```sh
npm install @superworldapp/ui-core
```

```sh
yarn add @superworldapp/ui-core
```

Peer dependencies

```sh
npm install react react-dom @mui/material @emotion/react @emotion/cache @emotion/styled tss-react
```

```sh
yarn add react react-dom @mui/material @emotion/react @emotion/cache @emotion/styled tss-react
```

## Usage

```jsx
import { ThemeProvider } from '@superworldapp/ui-core';

export const App: FC = () => (
  <ThemeProvider>
    <Routes />
  </ThemeProvider>
);

```





