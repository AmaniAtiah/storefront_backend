import { Router } from "express";
 import {create, index, show, productByCategory} from '../../controllers/category'
 import validationTokenMiddleware from '../../middleware/authentication.middleware'


const categoryRoutes = Router(); 

categoryRoutes.post('/', validationTokenMiddleware, create);
categoryRoutes.get('/' ,index);
categoryRoutes.get('/:id' ,show);
categoryRoutes.get('/:id/products' ,productByCategory);





export default categoryRoutes;