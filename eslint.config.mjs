import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals, { jest } from "globals";


/** @type {import('eslint').Linter.Config[]} */
export default [
  // базовые настройки js
  {
    name: 'base-js-rules',
    env: {
      jest: true
    },
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
      }
    }
  },
  // настройки для ts
  {
    name: 'base-ts-rules',
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      }
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      ...ts.configs.recommended.rules,
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
  // React конфигурация
  {
    name: 'react-rules',
    files: ["**/*.tsx", "**/*.jsx"],
    plugins: {
      "react": react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    settings: {
      react: {
        version: "detect" // Автоматически определяет версию React
      }
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Не нужен в React 17+
      'import/no-unresolved': 'off', // Отключаем, так как теперь алиасы настроены
      'no-undef': 'off', // Отключаем, так как добавлены глобальные объекты
    },
  },
  // Настройки для импортов
  {
    name: 'import-rules',
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: { "import": importPlugin },
    rules: {
      "import/order": ["error", { "groups": ["builtin", "external", "internal"] }],
      "import/no-extraneous-dependencies": "error",
    },
  },
  // Общие настройки
  {
    ignores: ["node_modules/", "dist/", "build/"],
  },
];