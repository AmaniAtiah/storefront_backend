import User from '../types/user'
import client from '../database'

import bcrypt from 'bcrypt';

const saltRounds:any = process.env.SALT_ROUNDS
const pepper = process.env.BCRYPT_PASSWORD

const hashPassword = (password: string) => {
    const salt = parseInt(saltRounds as string, 10)
    return bcrypt.hashSync(`${password}${pepper}`, salt)
}

class UserModel {
    // create 

    async create(u: User): Promise<User> {

        try {
            const connection  = await client.connect();
            const sql = `INSERT INTO users (email, first_name, last_name, password) VALUES($1, $2, $3, $4) RETURNING id, email, first_name, last_name`;

            const result = await connection.query(sql, [u.email, u.first_name, u.last_name, hashPassword(u.password) ]);

            connection.release();

            return result.rows[0]



        } catch (error) {
            throw new Error(`Unable to create user (${u.first_name}): ${(error as Error).message}`)
        }

    }


    async authenticate(email: string, password: string): Promise<User | null> {
        try {
            const connection = await client.connect();
            const sql = 'SELECT password FROM users WHERE email=$1'
            const result = await connection.query(sql, [email]);
            if(result.rows.length) {
                const{password: hashPassword} = result.rows[0];
                const isPasswordValid = bcrypt.compareSync(`${password}${pepper}`, hashPassword);

                if(isPasswordValid) {
                    const userInfo = await connection.query(
                    'SELECT id, email, first_name, last_name FROM users WHERE email=($1)', [email]);

                    return userInfo.rows[0]
                }
            }
            connection.release();
            return null;

        } catch(error) {
            throw new Error(`Unable to login: ${(error as Error).message}`)

        }
    }


    async index(): Promise<User[]> {

        try {
            const connection  = await client.connect();
            const sql = `SELECT id, email, first_name, last_name  FROM users`;
            const result = await connection.query(sql);
            connection.release();
            return result.rows

        } catch (error) {
            throw new Error(`Error at retriving users  ${(error as Error).message}`)
        }

    }

    async show(id: string): Promise<User> {

        try {
            const connection  = await client.connect();
            const sql = `SELECT id, email, first_name, last_name  FROM users WHERE id=($1)`;
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0]

        } catch (error) {
            throw new Error(`could not find user ${id},  ${(error as Error).message}`)
        }

    }


}

export default UserModel;