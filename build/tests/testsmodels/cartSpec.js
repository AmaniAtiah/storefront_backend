"use strict";
// import db from '../../database'
// import Cart from '../../types/cart'
// import CartModel from '../../models/cart';
// import cartRoutes from '../../routes/api/cart';
// const cartModel = new CartModel();
// describe('Cart Module',() => {
//     describe('Test methods exists', () => {
//         it('should have a create cart  method', () => {
//             expect(cartModel.addCart).toBeDefined();
//         })
//         it('should have add product to cart  method', () => {
//             expect(cartModel.addProductToCart).toBeDefined();
//         })
//         it('should have show cart  method', () => {
//             expect(cartModel.showCart).toBeDefined();
//         })
//     })
//     describe('Test Cart Module Logic', () => {
//         const cart = {
//             user_id: "1118"
//         } as Cart;
//         beforeAll(async () => {
//             const createdCart = await cartModel.addCart(cart);
//             cart.id = createdCart.id
//         });
//         afterAll(async() => {
//             const connection = await db.connect();
//             const sql = 'DELETE FROM carts';
//             await connection.query(sql);
//             connection.release();
//         });
//         afterAll(async() => {
//             const connection = await db.connect();
//             const sql = 'DELETE FROM cart_item';
//             await connection.query(sql);
//             connection.release();
//         });
//         it('Create method should return a new cart', async() => {
//             const createdCart = await cartModel.addCart({
//                 user_id: "1118"
//             } as Cart);
//             expect(createdCart).toEqual({
//                 id: createdCart.id,
//                 user_id: "1118"
//             } as Cart);
//         })
//         // it('Create method should return add product to cart', async() => {
//         //     const addProduct = await cartModel.addProductToCart("121", "360", 1);
//         //     expect(addProduct)
//         // })
//         //  it('show cart by user', async() => {
//         //     const returnedProductcart = await cartModel.showCart(cart.user_id as unknown as string)
//         //     expect(returnedProductcart);
//         // })
//     })
// })
