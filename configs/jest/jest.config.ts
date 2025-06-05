/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  moduleDirectories: [
    "node_modules"
  ],
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  setupFilesAfterEnv: ['<rootDir>/configs/jest/setupTest.ts'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/configs/jest/svgMock.ts',
      // '^@/(.*)$': '<rootDir>/src/$1' понадобится для алиасов при подключении

  },
  rootDir: '../../'
};

export default config;
