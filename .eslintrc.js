// inspired by https://github.com/chenglou/react-motion/blob/master/.eslintrc

module.exports = {
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true
    },
    "parser": "babel-eslint",
    "extends": ["airbnb"],
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "semi": [ 2, "always" ],
      "react/jsx-boolean-value": [2, "always"],
      "react/sort-comp": [1],
      "comma-dangle": ["error", "always-multiline"],
      "no-confusing-arrow": 0,
      "arrow-parens": 0,
      "arrow-body-style": 0,
      "object-curly-spacing": 0,
      "object-curly-newline": 0,
      "prefer-destructuring": 0,
      "react/require-default-props": 0,
      "react/destructuring-assignment": 0,
      "import/no-extraneous-dependencies": 0,
      "no-console": 0,
      "react/jsx-wrap-multilines": 0,
      "operator-linebreak": 0,
      "react/prefer-stateless-function": 0,
      "no-plusplus": 0,
    }
};
