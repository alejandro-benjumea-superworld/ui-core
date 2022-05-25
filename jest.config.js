/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/deprecated',
    '.styles.ts',
    '.styles.tsx',
    '.stories.ts',
    '.stories.tsx',
    'index.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 1,
      functions: 1,
      lines: 1,
      statements: 1,
    },
  },
  displayName: 'ui-core',
  moduleNameMapper: {
    '~utils/(.*)': '<rootDir>/src/utils/$1',
    '~/(.*)': '<rootDir>/src/$1',
  },
};
