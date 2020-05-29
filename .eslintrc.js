{
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended"
    ],
    "plugins": ["react", "@typescript-eslint", "prettier"],
    "env": {
      "browser": true,
      "jasmine": true,
      "jest": true
    },
    "rules": {
      "prettier/prettier": ["error"],
      "@typescript-eslint/explicit-member-accessibility": 0,
      "@typescript-eslint/explicit-function-return-type": 0,
      "react/no-unescaped-entities": 0
    },
    "settings": {
      "react": {
        "pragma": "React",
        "version": "detect"
      }
    },
    "parser": "@typescript-eslint/parser"
  }