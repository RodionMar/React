/* eslint-env node */

module.exports = {
  root: true,
  env: { 
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', "@typescript-eslint", "react", "prettier", "react-hooks"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react-hooks/rules-of-hooks': 'error',
    "react-hooks/exhaustive-deps": "warn",
    "comma-dangle": ["error", "only-multiline"],
    "react/prop-types": "off",
    "react/display-name": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-var-requires": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
  settings: {
    react: {
      "pragma": "React",
      "version": "detect"
    }
  }
}
