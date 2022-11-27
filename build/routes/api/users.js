"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_1 = require("../../controllers/users");
var authentication_middleware_1 = __importDefault(require("../../middleware/authentication.middleware"));
var userRoutes = (0, express_1.Router)();
userRoutes.post('/', users_1.create);
userRoutes.get('/', authentication_middleware_1.default, users_1.index);
userRoutes.get('/:id', authentication_middleware_1.default, users_1.show);
userRoutes.post('/authenticate', users_1.authenticate);
exports.default = userRoutes;
