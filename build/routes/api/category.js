"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var category_1 = require("../../controllers/category");
var authentication_middleware_1 = __importDefault(require("../../middleware/authentication.middleware"));
var categoryRoutes = (0, express_1.Router)();
categoryRoutes.post('/', authentication_middleware_1.default, category_1.create);
categoryRoutes.get('/', category_1.index);
categoryRoutes.get('/:id', category_1.show);
categoryRoutes.get('/:id/products', category_1.productByCategory);
exports.default = categoryRoutes;
