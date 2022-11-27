"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cart_1 = require("../../controllers/cart");
var authentication_middleware_1 = __importDefault(require("../../middleware/authentication.middleware"));
var cartRoutes = (0, express_1.Router)();
cartRoutes.post('/', authentication_middleware_1.default, cart_1.addCart);
cartRoutes.post('/:id/products', authentication_middleware_1.default, cart_1.addProductToCart);
cartRoutes.get('/:id/products', authentication_middleware_1.default, cart_1.showCart);
exports.default = cartRoutes;
