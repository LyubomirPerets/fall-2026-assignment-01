export type NetworkConfig = {};

export type EnvironmentConfig = {};

export type AppConfig = NetworkConfig & EnvironmentConfig;

export function initializeConfig(userOverrides: Partial<AppConfig>): AppConfig {
  for (const key in userOverrides) {
    if (userOverrides.hasOwnProperty(key)) {
      throw new Error(`Invalid configuration key: ${key}`);
    }
  }
  return {} as AppConfig;
  }