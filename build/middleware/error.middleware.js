"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorMiddleware = function (error, req, res, next) {
    var status = error.status || 500;
    var message = error.message || 'Whoops!! something went wrong';
    res.status(status).json({ status: status, message: message });
};
exports.default = errorMiddleware;
