// For a detailed explanation regarding each configuration property, visit:
// https://facebook.github.io/jest/docs/en/configuration.html

module.exports = {
  // Stop running tests after the first failure
  bail: false,

  // Instabul configuration
  verbose: true,

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  // The directory where Jest should output its coverage files
  coverageDirectory: "./coverage/",

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],

  // The test environment that will be used for testing
  testEnvironment: "node",

  // Whether to use watchman for file crawling
  // watchman: true,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/utils/assetsTransformer.js",
    "\\.(css|less)$": "<rootDir>/utils/assetsTransformer.js"
  },
  globals: {
    window: true
  }
};
