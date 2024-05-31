module.exports = {
  "extends": ["next/core-web-vitals", "eslint:recommended",
    "plugin:@typescript-eslint/recommended", "prettier"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    "no-undef": "off",
    indent: ['error', 2],
    'no-multi-spaces': ['error'],
  }
}