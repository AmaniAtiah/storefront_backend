

import UserModel from "../../models/user";
import db from '../../database'
import User from '../../types/user'

const userModel = new UserModel();


describe('User Module',() => {
    describe('Test methods exists', () => {
        it('should have a Get Many Users method', () => {
            expect(userModel.index).toBeDefined();
        })

        it('should have a Get One User method', () => {
             expect(userModel.show).toBeDefined();
        })

        it('should have a create user  method', () => {
            expect(userModel.create).toBeDefined();
        })

        it('should have an Update User method', () => {
            // expect(userModel.updateOne).toBeDefined();
        })

        it('should have a delete User method', () => {
            // expect(userModel.deleteOne).toBeDefined();
        })

        it('should have an Authenticate User method', () => {
            expect(userModel.authenticate).toBeDefined();
        })
    })

    describe('Test User Module Logic', () => {
        const user = {
            email: 'hi@gmail.com',
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

        // afterAll(async() => {
        //     const connection = await db.connect();
        //     const sql = 'DELETE FROM cart_item';
        //     await connection.query(sql);
        //     connection.release();
        // });

        

        it('Create method should return a new user', async() => {
            const createdUser = await userModel.create({
                email: 'reem1@gmail.com',
                first_name: 'Reem',
                last_name: 'Atiah',
                password: '1234qwer',
            } as User);

            expect(createdUser).toEqual({
                id: createdUser.id,
                email: 'reem1@gmail.com',
                first_name: 'Reem',
                last_name: 'Atiah',
            } as User);
        
        })


        it('Get Many method should return all available users in  DB', async() => {
            const users = await userModel.index()
            expect(users.length).toBe(2);
        })

        it('Get One  method should return testUser when  called ID', async() => {
            const returnedUser = await userModel.show(user.id as unknown as string)

            expect(returnedUser.id).toBe(user.id);
            expect(returnedUser.email).toBe(user.email);
            expect(returnedUser.first_name).toBe(user.first_name);
            expect(returnedUser.last_name).toBe(user.last_name);


        })


    })
})