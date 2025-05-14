import pluginJs from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.es6,
        ...globals.node,
        ...globals.browser,
      },
    },
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
  },
  pluginJs.configs.recommended,
];
