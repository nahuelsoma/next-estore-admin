module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "next",
    "next/core-web-vitals",
  ],
  rules: {
    semi: ["error", "always"],
    "no-console": "warn",
    "prettier/prettier": [
      "warn",
      {
        semi: true,
        singleQuote: false,
        printWidth: 100,
        tabWidth: 2,
        trailingComma: "es5",
        bracketSpacing: true,
        arrowParens: "avoid",
        endOfLine: "auto",
      },
    ],
    "react/self-closing-comp": "warn",
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
  },
};
