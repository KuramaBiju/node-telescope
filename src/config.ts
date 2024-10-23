export interface TelescopeConfig {
    http: boolean;
    errors: boolean;
    database: boolean;
    logLevel: 'info' | 'debug' | 'error';
    storage: 'memory' | 'file' | 'database';
  }
  
  const defaultConfig: TelescopeConfig = {
    http: true,
    errors: true,
    database: true,
    logLevel: 'info',
    storage: 'memory'
  };
  
  export default defaultConfig;