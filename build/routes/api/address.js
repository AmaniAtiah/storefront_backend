"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var address_1 = require("../../controllers/address");
var authentication_middleware_1 = __importDefault(require("../../middleware/authentication.middleware"));
var addressRoutes = (0, express_1.Router)();
addressRoutes.post('/', authentication_middleware_1.default, address_1.createAddress);
addressRoutes.post('/:id', authentication_middleware_1.default, address_1.addUserAddress);
addressRoutes.get('/:id/show-user-address', authentication_middleware_1.default, address_1.showAddressByUser);
exports.default = addressRoutes;
