
import supertest from 'supertest'
import UserModel from "../../models/user";
import db from '../../database'
import User from '../../types/user'

import app from '../../index'

const userModel = new UserModel()
const request = supertest(app)
let token = ''

describe('User API Endpoints', () => {
 const user = {
    email: 'hi@gmail.com',
    first_name: 'Amani',
    last_name: 'Atiah',
    password: '1234qwer',

 } as User

 beforeAll(async () => {
 const createdUser = await userModel.create(user)
 user.id = createdUser.id
 })

 afterAll(async () => {
 const connection = await db.connect()

 const sql = 'DELETE FROM users;'
 await connection.query(sql)
 connection.release()
 })

 describe('Test Authenticate methods', () => {
 it('should be able to authenticate to get token', async () => {
    const res = await request
    .post('/api/users/authenticate')
    .set('Content-type', 'application/json')
    .send({
        email: 'hi@gmail.com',
        password: '1234qwer',
    })


    
    expect(res.status).toBe(200)
    const { id, email, token: userToken } = res.body.data
    expect(id).toBe(user.id)
    expect(email).toBe('hi@gmail.com')
    token = userToken
    })
    
    
    it('should be failed to authenticate with wrong email', async () => {
        const res = await request
        .post('/api/users/authenticate')
        .set('Content-type', 'application/json')
        .send({
             email: 'wrong@email.com',
             password: 'test123',
            
            })
             expect(res.status).toBe(401)
            })
         })
    
    describe('Test CRUD API methods', () => {
        
        it('should create new user', async () => {
        const res = await request
        .post('/api/users/')
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
            email: 'reem1@gmail.com',
            first_name: 'Reem',
            last_name: 'Atiah',
            password: '1234qwer',
        } as User)
        expect(res.status).toBe(200)
        const { email, first_name, last_name } = res.body.data
        expect(email).toBe('reem1@gmail.com')
        expect(first_name).toBe('Reem')
        expect(last_name).toBe('Atiah')
    })
    
    it('should get list of users', async () => {
        
        const res = await request
        .get('/api/users/')
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        expect(res.status).toBe(200)
        expect(res.body.data.length).toBe(2)
     })
     
     it('should get user info', async () => {
        const res = await request
        .get(`/api/users/${user.id}`)
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        expect(res.status).toBe(200)
        expect(res.body.data.first_name).toBe('Amani')
        expect(res.body.data.last_name).toBe('Atiah')
        expect(res.body.data.email).toBe('hi@gmail.com')
    })


    })
 })


