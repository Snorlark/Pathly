"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const env_1 = __importDefault(require("../config/env"));
const errorHandler = (err, req, res, next) => {
    let { statusCode, message } = err;
    if (!statusCode) {
        statusCode = 500;
    }
    if (!message) {
        message = 'Internal Server Error';
    }
    res.locals.errorMessage = err.message;
    const response = {
        code: statusCode,
        message,
        ...(env_1.default.NODE_ENV === 'development' && { stack: err.stack }),
    };
    if (env_1.default.NODE_ENV === 'development') {
        console.error(err);
    }
    res.status(statusCode).json(response);
};
exports.errorHandler = errorHandler;
