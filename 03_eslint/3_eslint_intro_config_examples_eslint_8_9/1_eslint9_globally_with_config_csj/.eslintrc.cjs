module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  extends: ["eslint:recommended"],
  rules: {
    "no-undef": "error",
    "no-unused-vars": "warn",
    "no-console": "error",
    indent: ["error", 2],
    semi: ["error", "always"],
    "no-var": "error",
    "no-cond-assign": ["error", "always"],
    camelcase: "error",
    "no-underscore-dangle": "error",
    complexity: ["error", { max: 2 }],
  },
};
