module.exports = {
    "extends": ["react-app", "plugin:jsx-a11y/recommended"],
    "plugins": ["jsx-a11y"],
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "jsx-a11y/href-no-hash": "off",
      "jsx-a11y/no-autofocus": "off",
      "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
      "semi": [ 2, "always" ],
      "react/jsx-boolean-value": [2, "always"],
      "react/sort-comp": [1],
    }
};
