"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const v1_1 = __importDefault(require("./routes/v1"));
const error_middleware_1 = require("./middlewares/error.middleware");
const app = (0, express_1.default)();
// parse json request body
app.use(express_1.default.json());
// parse urlencoded request body
app.use(express_1.default.urlencoded({ extended: true }));
// enable cors
app.use((0, cors_1.default)());
app.options('*', (0, cors_1.default)());
// v1 api routes
app.use('/api/v1', v1_1.default);
// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});
// global error handler
app.use(error_middleware_1.errorHandler);
exports.default = app;
