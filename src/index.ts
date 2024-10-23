import express, { Express } from 'express';
import initHttpMonitoring from './monitor/http';
import initErrorMonitoring from './monitor/errors';
import initDatabaseMonitoring from './monitor/database';
import defaultConfig, { TelescopeConfig } from './config';

const nodeTelescope = (app: Express, userConfig: Partial<TelescopeConfig> = {}) => {
  const config: TelescopeConfig = { ...defaultConfig, ...userConfig };

  // Inicializa el monitoreo de HTTP
  if (config.http) {
    initHttpMonitoring(app);
  }

  // Inicializa el monitoreo de errores
  if (config.errors) {
    initErrorMonitoring(app);
  }

  // Inicializa el monitoreo de base de datos
  if (config.database) {
    initDatabaseMonitoring();
  }

  console.log('Node Telescope started with config:', config);
};

export default nodeTelescope;