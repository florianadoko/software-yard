import { Config } from "jest";

const config: Config = {
  preset: "ts-jest", // Use ts-jest instead of Babel
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest", // Use ts-jest for TypeScript & JavaScript
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"], // If you have setup files
};

export default config;
