import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "jsdom",
  transform: { "\\.[jt]sx?$": "ts-jest" },
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png)$": "./test/jest/__mocks__/fileMock.js",
    '\\.(css|less)$': "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["./src/jest.setup.ts"]
};

export default config;
