import Address from '../types/address'
import client from '../database'


class AddressModel {

    async createAddress(a: Address): Promise<Address> {

        try {
            const connection  = await client.connect();
            const sql = `INSERT INTO addresses (address_line1, address_line2, city, country, mobile) VALUES($1,$2, $3, $4, $5) RETURNING id, address_line1, address_line2, city, country, mobile`;
            
            const result = await connection.query(sql, [a.address_line1,  a.address_line2, a.city, a.country, a.mobile]);

            connection.release();

            return result.rows[0]



        } catch (error) {
            throw new Error(`Unable to create address (${a.country}): ${(error as Error).message}`)
        }



    }

    async addUserAddress(userId: string, addressId: string, is_default: number): Promise<Address> {

        try {
            const connection  = await client.connect();
            const sql = `INSERT INTO user_address (user_id, address_id, is_default) VALUES($1,$2, $3) RETURNING id, user_id, address_id, is_default`;
            
            const result = await connection.query(sql, [userId,  addressId, is_default]);

            connection.release();

            return result.rows[0]



        } catch (error) {
            throw new Error(`Unable to add user address (${userId}): ${(error as Error).message}`)
        }



    }

    async showAddressByUser(userId: string): Promise<Address> {

        try {
            const connection  = await client.connect();
            const sql = `SELECT * FROM addresses INNER JOIN user_address ON addresses.id = user_address.address_id WHERE user_address.user_id=($1)`;
            
            const result = await connection.query(sql, [userId]);

            connection.release();

            return result.rows



        } catch (error) {
            throw new Error(`Error at retriving addresses by user (${userId}): ${(error as Error).message}`)
        }



    }
    


}

export default AddressModel;