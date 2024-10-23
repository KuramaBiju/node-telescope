"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../index"));
describe('Node Telescope', () => {
    let app;
    beforeEach(() => {
        app = (0, express_1.default)();
        (0, index_1.default)(app);
    });
    it('should log HTTP requests', async () => {
        await (0, supertest_1.default)(app).get('/');
    });
});
