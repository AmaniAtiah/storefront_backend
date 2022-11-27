

import db from '../../database'
import Address from '../../types/address'
import AddressModel from '../../models/address';


const addressModel = new AddressModel();


describe('Address Module',() => {
    describe('Test methods exists', () => {
   

        it('should have a create address  method', () => {
            expect(addressModel.createAddress).toBeDefined();
        })

        // it('should have add user address method', () => {
        //     expect(addressModel.addUserAddress).toBeDefined();
        // })

        // it('should have show user addresses  method', () => {
        //     expect(addressModel.showAddressByUser).toBeDefined();
        // })


    })

    describe('Test Address Module Logic', () => {
        const address = {
            address_line1: "test",
            address_line2: "test",
            city: "test",
            country: "test",
            mobile: "124555554",

    
        } as Address;

        beforeAll(async () => {
            const createdaddress = await addressModel.createAddress(address);
            address.id = createdaddress.id
        });

        afterAll(async() => {
            const connection = await db.connect();
            const sql = 'DELETE FROM addresses';
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

        it('Create method should return a new address', async() => {
            const createdaddress= await addressModel.createAddress({
                address_line1: "test",
                address_line2: "test",
                city: "test",
                country: "test",
                mobile: "124555554",
            } as Address);

            expect(createdaddress).toEqual({
                id: createdaddress.id,
                address_line1: "test",
                address_line2: "test",
                city: "test",
                country: "test",
                mobile: "124555554",
            } as Address);
        
        })

        // it('Create method should return add user address', async() => {
            
        //     const addUserAddress = await addressModel.addUserAddress("1080", "257", 1);

        //     expect(addUserAddress)
        
        
        // })

        //  it('show address by user', async() => {
        //     const returnedAddressUser = await addressModel.showAddressByUser("645")

        //     expect(returnedAddressUser);
          


        // })

  

    })
})