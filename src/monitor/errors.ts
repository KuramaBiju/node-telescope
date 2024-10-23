import { Express, Request, Response, NextFunction } from 'express';

const initErrorMonitoring = (app: Express) => {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(`[Error] ${err.message} - ${req.method} ${req.url}`);
    next(err); // Sigue con el manejo de errores estándar
  });
};

export default initErrorMonitoring;
