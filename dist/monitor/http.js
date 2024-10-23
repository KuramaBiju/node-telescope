"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initHttpMonitoring = (app) => {
    app.use((req, res, next) => {
        const start = Date.now();
        res.on('finish', () => {
            const duration = Date.now() - start;
            console.log(`[HTTP] ${req.method} ${req.url} - ${res.statusCode} - ${duration}ms`);
        });
        next();
    });
};
exports.default = initHttpMonitoring;
