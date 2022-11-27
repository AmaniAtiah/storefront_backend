import Cart from '../types/cart'
import client from '../database'


class CartModel {

    async addCart(c: Cart): Promise<Cart> {

        try {
            const connection  = await client.connect();
            const sql = `INSERT INTO carts (user_id) VALUES($1) RETURNING id, user_id`;
            
            const result = await connection.query(sql, [c.user_id]);

            connection.release();

            return result.rows[0]



        } catch (error) {
            throw new Error(`Unable to create cart (${c.user_id}): ${(error as Error).message}`)
        }



    }

    async addProductToCart(cartId: string, productId: string, quantity: number): Promise<Cart> {

        try {
            const connection  = await client.connect();
            const sql = `INSERT INTO cart_item (cart_id, product_id, quantity) VALUES($1, $2, $3) RETURNING id, cart_id, product_id, quantity`;
            
            const result = await connection.query(sql, [cartId, productId, quantity]);

            connection.release();

            return result.rows[0]



        } catch (error) {
            throw new Error(`Unable to create cart item (${cartId}): ${(error as Error).message}`)
        }



    }

    async showCart(userId:string): Promise<Cart> {

        try {
            const connection  = await client.connect();
            const sql = ` SELECT * FROM carts INNER JOIN cart_item ON carts.id = cart_item.cart_id INNER JOIN products ON products.id = cart_item.product_id WHERE carts.user_id=($1)`;
            
            const result = await connection.query(sql, [userId]);

            connection.release();

            return result.rows



        } catch (error) {
            throw new Error(`Error at retriving cart(): ${(error as Error).message}`)
        }



    }


}

export default CartModel;