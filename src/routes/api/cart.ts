import { Router } from "express";
 import {addCart, addProductToCart, showCart} from '../../controllers/cart'
 import validationTokenMiddleware from '../../middleware/authentication.middleware'


const cartRoutes = Router(); 

cartRoutes.post('/', validationTokenMiddleware, addCart);
cartRoutes.post('/:id/products', validationTokenMiddleware, addProductToCart)

cartRoutes.get('/:id/products',validationTokenMiddleware ,showCart);



export default cartRoutes;