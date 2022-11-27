import { Router } from "express";
 import {create, index, show, addProductAndCategory, fiveMostProduct} from '../../controllers/products'
 import validationTokenMiddleware from '../../middleware/authentication.middleware'


const productRoutes = Router(); 

productRoutes.post('/', validationTokenMiddleware, create );
productRoutes.post('/add-product', validationTokenMiddleware,addProductAndCategory );

productRoutes.get('/' ,index);

productRoutes.get('/five-most-products', fiveMostProduct);


productRoutes.get('/:id', show);

// productRoutes.get('/category/:id/products', productByCategory);





export default productRoutes;