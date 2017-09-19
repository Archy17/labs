module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:jest/recommended"
  ],
  "plugins": [
    "jest"
  ],
  "env": {
    "jest/globals": true
  },
  "rules": {
    "semi": "off",
    "no-use-before-define": "off",
    "no-underscore-dangle": "off"
  }
};
