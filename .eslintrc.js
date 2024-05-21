module.exports = {
  "extends": ["next/core-web-vitals", "eslint:recommended",
    "plugin:@typescript-eslint/recommended", "prettier"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    indent: ['error', 2],
    // we want to avoid extraneous spaces
    'no-multi-spaces': ['error'],
  }
}