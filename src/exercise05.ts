export type NetworkConfig = { serverUrl: string; port: number; useSsl: boolean };

export type EnvironmentConfig = { environment: 'dev' | 'prod'; timeout: number };

export type AppConfig = NetworkConfig & EnvironmentConfig;

const defaults: AppConfig = {
  serverUrl: 'http://localhost',
  port: 8080,
  useSsl: false,
  environment: 'dev',
  timeout: 3000
};

export function initializeConfig(userOverrides: Partial<AppConfig>): AppConfig {
  return { ...defaults, ...userOverrides };
  }