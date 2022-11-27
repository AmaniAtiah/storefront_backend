"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var handleUnauthorizedError = function (next) {
    var error = new Error('Login Error: Please try again');
    error.status = 401;
    next(error);
};
var validationTokenMiddleware = function (req, res, next) {
    try {
        var tokenSecret = process.env.TOKEN_SECRET;
        var authHeader = req.get('Authorization');
        if (authHeader) {
            var bearer = authHeader.split(' ')[0].toLowerCase();
            var token = authHeader.split(' ')[1];
            if (token && bearer === 'bearer') {
                var decode = jsonwebtoken_1.default.verify(token, tokenSecret);
                if (decode) {
                    next();
                }
                else {
                    handleUnauthorizedError(next);
                }
            }
            else {
                handleUnauthorizedError(next);
            }
        }
        else {
            handleUnauthorizedError(next);
        }
    }
    catch (error) {
        handleUnauthorizedError(next);
    }
};
exports.default = validationTokenMiddleware;
