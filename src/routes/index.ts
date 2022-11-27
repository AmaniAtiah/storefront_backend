import { Router } from "express";
import usersRoutes from './api/users'
import productRoutes from './api/products'
import categoryRoutes from './api/category'
import cartRoutes from './api/cart'
import addressRoutes from './api/address'
import orderRoutes from './api/order'






const routes = Router();

routes.use('/users', usersRoutes)
routes.use('/products', productRoutes)
routes.use('/categories', categoryRoutes)
routes.use('/cart', cartRoutes)
routes.use('/address', addressRoutes)
routes.use('/orders', orderRoutes)





export default routes; 