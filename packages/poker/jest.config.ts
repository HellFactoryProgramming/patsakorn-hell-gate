import type { Config } from "jest";

export default async (): Promise<Config> => {
  return {
    testPathIgnorePatterns: ["node_modules"],
    verbose: true,
  };
};
