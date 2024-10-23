"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("./monitor/http"));
const errors_1 = __importDefault(require("./monitor/errors"));
const database_1 = __importDefault(require("./monitor/database"));
const config_1 = __importDefault(require("./config"));
const nodeTelescope = (app, userConfig = {}) => {
    const config = { ...config_1.default, ...userConfig };
    // Inicializa el monitoreo de HTTP
    if (config.http) {
        (0, http_1.default)(app);
    }
    // Inicializa el monitoreo de errores
    if (config.errors) {
        (0, errors_1.default)(app);
    }
    // Inicializa el monitoreo de base de datos
    if (config.database) {
        (0, database_1.default)();
    }
    console.log('Node Telescope started with config:', config);
};
exports.default = nodeTelescope;
