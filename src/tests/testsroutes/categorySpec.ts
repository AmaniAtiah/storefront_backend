

import supertest from 'supertest'
import db from '../../database'

import app from '../../index'
import Category from '../../types/category';
import CategpryModel from '../../models/category';

const categoryModel = new CategpryModel()
const request = supertest(app)
let token = ''

describe('Category API Endpoints', () => {
 const category = {
 name: 'blouse',
 } as Category

 beforeAll(async () => {
 const createdCategory = await categoryModel.create(category)
 category.id = createdCategory.id
 })

 afterAll(async () => {
 const connection = await db.connect()

 const sql = 'DELETE FROM categories;'
 await connection.query(sql)
 connection.release()
 })

 afterAll(async() => {
    const connection = await db.connect();
    const sql = 'DELETE FROM products_category';
    await connection.query(sql);
    connection.release();
});


 describe('Test CRUD API methods', () => {
    it('should create new category', async () => {
   
            request
                .post('/api/categories/')
                .send({
                    name: 'dress',
                })
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .expect(201)
                .expect({
                    name: 'dress',
                })
        })
    
  
    
    it('should get list of categories', async () => {
        
        const res = await request
        .get('/api/categories/')
        expect(res.status).toBe(200)
        expect(res.body.data.length).toBe(1)
     })
     
     it('should get category info', async () => {
        const res = await request
        .get(`/api/categories/${category.id}`)
        expect(res.status).toBe(200)
        expect(res.body.data.name).toBe('blouse')
    })
    

    })
 })