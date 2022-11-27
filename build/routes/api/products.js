"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var products_1 = require("../../controllers/products");
var authentication_middleware_1 = __importDefault(require("../../middleware/authentication.middleware"));
var productRoutes = (0, express_1.Router)();
productRoutes.post('/', authentication_middleware_1.default, products_1.create);
productRoutes.post('/add-product', authentication_middleware_1.default, products_1.addProductAndCategory);
productRoutes.get('/', products_1.index);
productRoutes.get('/five-most-products', products_1.fiveMostProduct);
productRoutes.get('/:id', products_1.show);
// productRoutes.get('/category/:id/products', productByCategory);
exports.default = productRoutes;
