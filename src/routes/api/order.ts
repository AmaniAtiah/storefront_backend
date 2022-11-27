import { Router } from "express";
 import {create, addProductToOrder, showOrderByUser} from '../../controllers/order'
 import validationTokenMiddleware from '../../middleware/authentication.middleware'


const orderRoutes = Router(); 

orderRoutes.post('/', validationTokenMiddleware, create);
orderRoutes.post('/:id', validationTokenMiddleware, addProductToOrder)

orderRoutes.get('/:id/show-user-order',validationTokenMiddleware ,showOrderByUser);



export default orderRoutes;