import Product from '../types/product'
import client from '../database'


class ProductModel {

    async create(p: Product): Promise<Product> {

        try {
            const connection  = await client.connect();
            const sql = `INSERT INTO products (name, price) VALUES($1, $2) RETURNING id, name, price`;
            
            const result = await connection.query(sql, [p.name, p.price]);

            connection.release();

            return result.rows[0]



        } catch (error) {
            throw new Error(`Unable to create product (${p.name}): ${(error as Error).message}`)
        }



    }


    async fiveMostProduct(): Promise<{name: string, price: string, productId: string}[]> {
        try {
          //@ts-ignore
          const connection = await client.connect()
          const sql =  'SELECT name,price,  count(name) from products INNER JOIN sales ON products.id = sales.product_id group by name, price order by count(name) DESC limit 5';
    
          const result = await connection.query(sql)
    
          connection.release()
    
          return result.rows
        } catch (err) {
          throw new Error(`Error at retriving five most product: ${err}`)
        } 
      }



    async index(): Promise<Product[]> {

        try {
            const connection  = await client.connect();
            const sql = `SELECT id, name, price FROM products`;
            const result = await connection.query(sql);
            connection.release();
            return result.rows

        } catch (error) {
            throw new Error(`Error at retriving products  ${(error as Error).message}`)
        }

    }

    async show(id: string): Promise<Product> {

        try {
            const connection  = await client.connect();
            const sql = `SELECT id, name, price  FROM products WHERE id=($1)`;
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0]

        } catch (error) {
            throw new Error(`could not find product ${id},  ${(error as Error).message}`)
        }

    }

    async addProductAndCategory(productId: string,categoryId: string ): Promise<Product> {

        try {
            const connection  = await client.connect();
            const sql = `INSERT INTO products_category (product_id, category_id) VALUES($1, $2) RETURNING id, product_id, category_id`;
            
            const result = await connection.query(sql, [productId,categoryId]);

            connection.release();

            return result.rows[0]



        } catch (error) {
            throw new Error(`Unable to create product and category (${categoryId}): ${(error as Error).message}`)
        }



    }

}

export default ProductModel;