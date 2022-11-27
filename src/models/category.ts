import Category from '../types/category'
import client from '../database'


class CategpryModel {
    // create 

    async create(c: Category): Promise<Category> {

        try {
            const connection  = await client.connect();
            const sql = `INSERT INTO categories (name) VALUES($1) RETURNING id, name`;

            const result = await connection.query(sql, [c.name ]);

            connection.release();

            return result.rows[0]



        } catch (error) {
            throw new Error(`Unable to create category (${c.name}): ${(error as Error).message}`)
        }



    }


    async index(): Promise<Category[]> {

        try {
            const connection  = await client.connect();
            const sql = `SELECT id, name FROM categories`;
            const result = await connection.query(sql);
            connection.release();
            return result.rows

        } catch (error) {
            throw new Error(`Error at retriving cateogories  ${(error as Error).message}`)
        }

    }

    async show(id: string): Promise<Category> {

        try {
            const connection  = await client.connect();
            const sql = `SELECT id, name  FROM categories WHERE id=($1)`;
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0]

        

        } catch (error) {
            throw new Error(`could not find category ${id},  ${(error as Error).message}`)
        }

    }

    async productByCategory(categoryId: string): Promise<[]> {
        try {
          //@ts-ignore
          const connection = await client.connect()
          const sql =  'SELECT products.name as product_name, categories.name FROM products INNER JOIN products_category ON products.id = products_category.product_id INNER JOIN categories ON categories.id = products_category.category_id WHERE products_category.category_id = ($1)';
    
          const result = await connection.query(sql, [categoryId])
    
          connection.release()
    
          return result.rows
        } catch (err) {
          throw new Error(`unable get products by category: ${err}`)
        } 
      }





}

export default CategpryModel;