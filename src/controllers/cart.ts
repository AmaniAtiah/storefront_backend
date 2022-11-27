import { NextFunction, Request, Response } from "express";
import CartModel from "../models/cart";



const cartModel = new CartModel();





export const addCart = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const cart = await cartModel.addCart(req.body)
        res.json({
            status: 'success',
            data: {...cart},
            message: 'cart created Successfully',
        })
        
    } catch (error) {
       
          next(error)

    }

}

export const addProductToCart = async (req: Request, res: Response, next: NextFunction) => {
    
    const cartId: string = req.params.id
    const productId: string = req.body.productId
    const quantity: number = parseInt(req.body.quantity)
    try {
        const addToCart = await cartModel.addProductToCart(cartId, productId, quantity)
        res.json({
            status: 'success',
            data: {...addToCart},
            message: 'cart item created Successfully',
        })
        
    } catch (error) {
       
          next(error)

    }

}

export const showCart = async (req: Request, res: Response, next: NextFunction) => {
    
    const userId: string = req.params.id;
    // const productId: string = req.body.productId
    // const quantity: number = parseInt(req.body.quantity)

    try {
        const showCart = await cartModel.showCart(userId)
        res.json({
            status: 'success',
            data: showCart,
            message: 'show cart Successfully',
        })
        
    } catch (error) {
       
          next(error)

    }

}
