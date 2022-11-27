

import db from '../../database'
import Category from '../../types/category'
import CategpryModel from "../../models/category";

const categoryModel = new CategpryModel();


describe('Category Module',() => {
    describe('Test methods exists', () => {
        it('should have a Get Many categories method', () => {
            expect(categoryModel.index).toBeDefined();
        })

        it('should have a Get One Category method', () => {
             expect(categoryModel.show).toBeDefined();
        })

        it('should have a create category  method', () => {
            expect(categoryModel.create).toBeDefined();
        })

        // it('should have get product by category', () => {
        //      expect(categoryModel.productByCategory).toBeDefined();
        // })

        // it('should have a delete User method', () => {
        //     // expect(userModel.deleteOne).toBeDefined();
        // })

        // it('should have an Authenticate User method', () => {
        //     // expect(userModel.authenticate).toBeDefined();
        // })
    })

    describe('Test Category Module Logic', () => {
        const category = {
            name: 'blouse',
          
    
        } as Category;

        beforeAll(async () => {
            const createdCategory = await categoryModel.create(category);
            category.id = createdCategory.id
        });

        afterAll(async() => {
            const connection = await db.connect();
            const sql = 'DELETE FROM categories';
            await connection.query(sql);
            connection.release();
        });

        afterAll(async() => {
            const connection = await db.connect();
            const sql = 'DELETE FROM products_category';
            await connection.query(sql);
            connection.release();
        });

        it('Create method should return a new category', async() => {
            const createdCategory = await categoryModel.create({
                name: 'dress'
            } as Category);

            expect(createdCategory).toEqual({
                id: createdCategory.id,
                name: 'dress'
            } as Category);
        
        })


        it('Get Many method should return all available categories in  DB', async() => {
            const categories = await categoryModel.index()
            expect(categories.length).toBe(2);
        })




        it('Get One  method should return testCategory when  called ID', async() => {
            const returnedCategory = await categoryModel.show(category.id as unknown as string)

            expect(returnedCategory.id).toBe(category.id);
            expect(returnedCategory.name).toBe(category.name);


        })

        // it('Get products by category', async() => {
        //     const productsbycategory = await categoryModel.productByCategory(category.id as unknown as string)
        //     expect(productsbycategory.length).toBe(0);
        // })

  

    })
})