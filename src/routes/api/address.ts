import { Router } from "express";
 import {createAddress, addUserAddress, showAddressByUser} from '../../controllers/address'
 import validationTokenMiddleware from '../../middleware/authentication.middleware'


const addressRoutes = Router(); 

addressRoutes.post('/', validationTokenMiddleware, createAddress);
addressRoutes.post('/:id', validationTokenMiddleware, addUserAddress)

 addressRoutes.get('/:id/show-user-address',validationTokenMiddleware ,showAddressByUser);



export default addressRoutes;