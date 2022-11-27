

import supertest from 'supertest'
import db from '../../database'
import Product from '../../types/product'

import app from '../../index'
import ProductModel from '../../models/product';

const prodcutModel = new ProductModel()
const request = supertest(app)
let token = ''

describe('Product API Endpoints', () => {
    const product = {
        name: 'adidas',
        price: '124'
    } as Product

 beforeAll(async () => {
    const createdProduct = await prodcutModel.create(product)
    product.id = createdProduct.id
 })

 afterAll(async () => {
    const connection = await db.connect()
    const sql = 'DELETE FROM products;'
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
        
    it('should create new product', async () => {
   
        request
            .post('/api/products/')
            .send({
                name: 'nike',
                price: '123',
            })
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .expect(201)
            .expect({
                name: 'nike',
                price: '123',
            })
    })



    
    it('should get list of products', async () => {
        
        const res = await request
        .get('/api/products/')
        expect(res.status).toBe(200)
        expect(res.body.data.length).toBe(1)
     })
     
     it('should get product info', async () => {
        const res = await request
        .get(`/api/products/${product.id}`)
        expect(res.status).toBe(200)
        expect(res.body.data.name).toBe('adidas')
        expect(res.body.data.price).toBe('124')

    })
    

    })
 })
