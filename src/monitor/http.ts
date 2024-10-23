import { Express, Request, Response, NextFunction } from 'express';

const initHttpMonitoring = (app: Express) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();

    res.on('finish', () => {
      const duration = Date.now() - start;
      console.log(`[HTTP] ${req.method} ${req.url} - ${res.statusCode} - ${duration}ms`);
    });

    next();
  });
};

export default initHttpMonitoring;