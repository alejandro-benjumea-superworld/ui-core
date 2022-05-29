<p>
  <a href="https://github.com/facebook/react/tree/v17.0.2" rel="noopener" target="_blank">
    <img alt="React" src="https://img.shields.io/badge/react-v17-fff?logo=react">
  </a>
  <a href="https://mui.com/material-ui/getting-started/usage" rel="noopener" target="_blank">
    <img alt="Material-UI" src="https://img.shields.io/badge/material--ui-v5-fff?logo=mui">
  </a>
  <a href="https://github.com/semantic-release/semantic-release">
    <img alt="semantic-releaser" src="https://img.shields.io/badge/semantic--release-angular-fff?logo=semantic-release">
  </a>
</p>

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
