module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)",
    "_layout",
  ],
  coveragePathIgnorePatterns: [
    "/eslint.config.js",
    "/jest.config.js",
    "/metro.config.js",
    "/scripts/reset-project.js",
    "/constants/Colors.ts",
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx,js,jsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/expo-env.d.ts",
    "!**/.expo/**",
  ],
  setupFiles: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -15,
    },
  },
};
