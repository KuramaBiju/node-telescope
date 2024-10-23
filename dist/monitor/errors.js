"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initErrorMonitoring = (app) => {
    app.use((err, req, res, next) => {
        console.error(`[Error] ${err.message} - ${req.method} ${req.url}`);
        next(err); // Sigue con el manejo de errores estándar
    });
};
exports.default = initErrorMonitoring;
