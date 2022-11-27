

import supertest from 'supertest'
import db from '../../database'
import Address from '../../types/address'

import app from '../../index'
import AddressModel from '../../models/address';

const addressModel = new AddressModel()
const request = supertest(app)
let token = ''

describe('Address API Endpoints', () => {
    const address = {
        address_line1: "test",
        address_line2: "test",
        city: "test",
        country: "test",
        mobile: "124555554",
    } as Address

 beforeAll(async () => {
    const createdAddress= await addressModel.createAddress(address)
    address.id = createdAddress.id
 })

 afterAll(async () => {
    const connection = await db.connect()
    const sql = 'DELETE FROM addresses;'
    await connection.query(sql)
    connection.release()
 })

 afterAll(async() => {
    const connection = await db.connect();
    const sql = 'DELETE FROM user_address';
    await connection.query(sql);
    connection.release();
});

afterAll(async() => {
    const connection = await db.connect();
    const sql = 'DELETE FROM orders';
    await connection.query(sql);
    connection.release();
});

afterAll(async() => {
    const connection = await db.connect();
    const sql = 'DELETE FROM order_item';
    await connection.query(sql);
    connection.release();
});

    
describe('Test CRUD API methods', () => {
        
    it('should create new address', async () => {
    
        request
        .post('/api/address/')
        .send({
            address_line1: "test",
            address_line2: "test",
            city: "test",
            country: "test",
            mobile: "124555554",
        })
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .expect(201)
        .expect({
            address_line1: "test",
            address_line2: "test",
            city: "test",
            country: "test",
            mobile: "124555554",
        })
    })
    
   

    })
 })
