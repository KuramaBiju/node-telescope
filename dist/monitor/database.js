"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const initDatabaseMonitoring = () => {
    // Monitorear las consultas de MongoDB
    mongoose_1.default.set('debug', (collectionName, method, query, doc) => {
        console.log(`[MongoDB] ${collectionName}.${method}`, JSON.stringify(query), doc);
    });
    console.log('Database monitoring initialized for MongoDB');
};
module.exports = initDatabaseMonitoring;
