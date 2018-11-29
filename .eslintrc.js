const path = require('path');

module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack.dev.js",
      },
    }
  },
  "rules": {
    "react/forbid-prop-types": "off",
  },
};