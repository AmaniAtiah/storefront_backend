import Order from '../types/order'
import client from '../database'


class OrderModel {

    
    async create(o: Order): Promise<Order> {

        try {
            const connection  = await client.connect();
            const sql = `INSERT INTO orders (user_id, status, address_id) VALUES($1,$2, $3) RETURNING id, user_id, status, address_id`;
            
            const result = await connection.query(sql, [o.user_id, o.status, o.address_id]);

            connection.release();

            return result.rows[0]



        } catch (error) {
            throw new Error(`Unable to create order (${o.user_id}): ${(error as Error).message}`)
        }



    }


    async addProductToOrder(productId: string, orderId: string, quantity: number, price: string): Promise<Order> {

        try {
            const connection  = await client.connect();
            const sql = `INSERT INTO order_item (product_id, order_id, quantity, price) VALUES($1, $2, $3, $4) RETURNING id, product_id, order_id, quantity,price`;
            
            const result = await connection.query(sql, [productId, orderId, quantity, price]);

            connection.release();

            return result.rows[0]



        } catch (error) {
            throw new Error(`Unable to create order item (${orderId}): ${(error as Error).message}`)
        }



    }
    
    async showOrderByUser(userId: string): Promise<Order> {

        try {
            const connection  = await client.connect();
            const sql = `SELECT  * FROM orders INNER JOIN order_item ON orders.id = order_item.order_id INNER JOIN products ON products.id = order_item.product_id WHERE orders.user_id=($1)`;
            
            const result = await connection.query(sql, [userId]);

            connection.release();

            return result.rows



        } catch (error) {
            throw new Error(`Error at retriving order by user (${userId}): ${(error as Error).message}`)
        }



    }
   


}

export default OrderModel;