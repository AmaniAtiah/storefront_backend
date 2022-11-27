import { Router } from "express";
 import {create, index, authenticate, show} from '../../controllers/users'
 import validationTokenMiddleware from '../../middleware/authentication.middleware'


const userRoutes = Router(); 

userRoutes.post('/', create);
userRoutes.get('/', validationTokenMiddleware ,index);
userRoutes.get('/:id', validationTokenMiddleware ,show);


userRoutes.post('/authenticate',authenticate)


export default userRoutes;