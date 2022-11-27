import UserModel from "../../models/user";
import db from '../../database'
import User from '../../types/user'

const userModel = new UserModel();


describe('Authentication Module',() => {
    describe('Test methods exists', () => {
        it('should have an authenticate User Module', () => {
            expect(userModel.authenticate).toBeDefined();
        })
    })
})

describe('Test Authentication Logic', () => {
    const user = {
        email: 'amani@gmail.com',
        first_name: 'Amani',
        last_name: 'Atiah',
        password: '1234qwer',

    } as User;
    
    beforeAll(async () => {
        const createdUser = await userModel.create(user);
        user.id = createdUser.id
    });

    afterAll(async() => {
        const connection = await db.connect();
        const sql = 'DELETE FROM users';
        await connection.query(sql);
        connection.release();
    });

    afterAll(async() => {
        const connection = await db.connect();
        const sql = 'DELETE FROM carts';
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
        const sql = 'DELETE FROM user_address';
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

    it('Authenticated method should return the authenticated user', async() => {
        const authenticatedUser = await userModel.authenticate(
            user.email,
            user.password 
        );
        expect(authenticatedUser?.email).toBe(user.email);
         expect(authenticatedUser?.first_name).toBe(user.first_name);
        expect(authenticatedUser?.last_name).toBe(user.last_name);

    });

    it('Authenticate method should return null for wrong credentials', async () => {
        const authenticatedUser = await userModel.authenticate(
            'mohammed@gmail.com',
            'fake-password'
        );
        expect(authenticatedUser).toBe(null)
    });

  
})

