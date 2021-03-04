module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  "transformIgnorePatterns": [
    "node_modules/(?!(react-native|@react-navigation|react-native-iphone-x-helper)/)"
  ],
  "setupFiles": [
    "<rootDir>/jest/setup.js"
  ],
};