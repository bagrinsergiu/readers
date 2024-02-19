module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/typescript"
  ],
  plugins: ["prettier"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "react/display-name": 0,
    "react/prop-types": 0,
    "no-prototype-builtins": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-unknown-property": 0,
    "prettier/prettier": 0
  },
  env: {
    node: true
  },
  rules: {
    "import/no-default-export": 2,
    "import/no-unresolved": 2,
    "import/named": 2
  },
  ignorePatterns: ["src/__tests__/*.ts"]
};
