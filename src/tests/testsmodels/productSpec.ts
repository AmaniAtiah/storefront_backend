

import db from '../../database'
import Product from '../../types/product'
import ProductModel from '../../models/product';

const productModel = new ProductModel();


describe('Product Module',() => {
    describe('Test methods exists', () => {
        it('should have a Get Many products method', () => {
            expect(productModel.index).toBeDefined();
        })

        it('should have a Get One Product method', () => {
             expect(productModel.show).toBeDefined();
        })

        it('should have a create Product  method', () => {
            expect(productModel.create).toBeDefined();
        })



        // it('should have a delete User method', () => {
        //     // expect(userModel.deleteOne).toBeDefined();
        // })

        // it('should have an Authenticate User method', () => {
        //     // expect(userModel.authenticate).toBeDefined();
        // })
    })

    describe('Test Product Module Logic', () => {
        const product = {
            name: 'nike',
            price: '123'
          
    
        } as Product;

        beforeAll(async () => {
            const createdProduct = await productModel.create(product);
            product.id = createdProduct.id
        });

        afterAll(async() => {
            const connection = await db.connect();
            const sql = 'DELETE FROM products';
            await connection.query(sql);
            connection.release();
        });

        afterAll(async() => {
            const connection = await db.connect();
            const sql = 'DELETE FROM products_category';
            await connection.query(sql);
            connection.release();
        });

        afterAll(async() => {
            const connection = await db.connect();
            const sql = 'DELETE FROM cart_item';
            await connection.query(sql);
            connection.release();
        });

        afterAll(async() => {
            const connection = await db.connect();
            const sql = 'DELETE FROM order_item';
            await connection.query(sql);
            connection.release();
        });

        it('Create method should return a new product', async() => {
            const createdProduct= await productModel.create({
                name: 'adidas', 
                price: "124"
            } as Product);

            expect(createdProduct).toEqual({
                id: createdProduct.id,
                name: 'adidas', 
                price: "124"
            } as Product);
        
        })


        it('Get Many method should return all available products in  DB', async() => {
            const products = await productModel.index()
            expect(products.length).toBe(2);
        })




        it('Get One  method should return testproduct when  called ID', async() => {
            const returnedProduct = await productModel.show(product.id as unknown as string)

            expect(returnedProduct.id).toBe(product.id);
            expect(returnedProduct.name).toBe(product.name);
            expect(returnedProduct.price).toBe(product.price);



        })

        // it('Get products by category', async() => {
        //     const productsbycategory = await categoryModel.productByCategory(category.id as unknown as string)
        //     expect(productsbycategory.length).toBe(0);
        // })

  

    })
})