const config = {
  preset: 'ts-jest',
  coverageProvider: "v8",
  
  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "ts",
  ],
  
  // The test environment that will be used for testing
  testEnvironment: "node",
  
  // Test files patterns
  testMatch: [
    "**/test/**/*.test.ts",
    "**/__tests__/**/*.test.ts"
  ],
  
  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  
  // Indicates whether each individual test should be reported during the run
  verbose: true,
};

module.exports = config;