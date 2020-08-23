module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaVersion": 9,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true,
          "modules": true,
          "experimentalObjectRestSpread": true
      }
  },
  "plugins": [
      "react"
  ],
  "rules": {
      "comma-dangle": 0,
      "react/jsx-uses-vars": 1,
      "react/display-name": 1,
      "no-unused-vars": "warn",
      "no-console": 0,
      "no-unexpected-multiline": "warn"
  },
};
