"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var order_1 = require("../../controllers/order");
var authentication_middleware_1 = __importDefault(require("../../middleware/authentication.middleware"));
var orderRoutes = (0, express_1.Router)();
orderRoutes.post('/', authentication_middleware_1.default, order_1.create);
orderRoutes.post('/:id', authentication_middleware_1.default, order_1.addProductToOrder);
orderRoutes.get('/:id/show-user-order', authentication_middleware_1.default, order_1.showOrderByUser);
exports.default = orderRoutes;
