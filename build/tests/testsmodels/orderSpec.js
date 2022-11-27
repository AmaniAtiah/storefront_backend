"use strict";
// import db from '../../database'
// import Order from '../../types/order'
// import OrderModel from '../../models/order';
// const orderModel = new OrderModel();
// describe('Order Module',() => {
//     describe('Test methods exists', () => {
//         it('should have a create order method', () => {
//             expect(orderModel.create).toBeDefined();
//         })
//         it('should have add product to order   method', () => {
//             expect(orderModel.addProductToOrder).toBeDefined();
//         })
//         it('should have show order by user  method', () => {
//             expect(orderModel.showOrderByUser).toBeDefined();
//         })
//     })
//     describe('Test Order Module Logic', () => {
//         const order = {
//             user_id: "1061",
//             status: "Pending",
//             address_id: "244"
//         } as Order;
//         beforeAll(async () => {
//             const createdOrder = await orderModel.create(order);
//             order.id = createdOrder.id
//         });
//         afterAll(async() => {
//             const connection = await db.connect();
//             const sql = 'DELETE FROM orders';
//             await connection.query(sql);
//             connection.release();
//         });
//         afterAll(async() => {
//             const connection = await db.connect();
//             const sql = 'DELETE FROM order_item';
//             await connection.query(sql);
//             connection.release();
//         });
//         it('Create method should return a new order', async() => {
//             const createdOrder= await orderModel.create({
//                 user_id: "1061",
//                 status: "Pending",
//                 address_id: "244"
//             } as Order);
//             expect(createdOrder).toEqual({
//                 id: createdOrder.id,
//                 user_id: "1061",
//                 status: "Pending",
//                 address_id: "244"
//             } as Order);
//         })
//         it('Create method should return add product to order', async() => {
//             const addProduct = await orderModel.addProductToOrder("360", "62", 1, "123");
//             expect(addProduct)
//         })
//         //  it('show cart by user', async() => {
//         //     const returnedProductOrder = await orderModel.showOrderByUser(order.user_id as unknown as string)
//         //     expect(returnedProductOrder);
//         // })
//     })
// })
