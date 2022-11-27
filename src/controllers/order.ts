import { NextFunction, Request, Response } from "express";
import OrderModel from "../models/order";



const orderModel = new OrderModel();

export const create = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const order = await orderModel.create(req.body)
        res.json({
            status: 'success',
            data: {...order},
            message: 'order created Successfully',
        })
        
    } catch (error) {
       
          next(error)

    }

}

export const addProductToOrder = async (req: Request, res: Response, next: NextFunction) => {
    
    const orderId: string = req.params.id
    const productId: string = req.body.productId
    const quantity: number = parseInt(req.body.quantity)
    const price: string = req.body.price

    try {
        const addToOrder = await orderModel.addProductToOrder(productId, orderId, quantity, price)
        res.json({
            status: 'success',
            data: {...addToOrder},
            message: 'odred product created Successfully',
        })
        
    } catch (error) {
       
          next(error)

    }

}


export const showOrderByUser = async (req: Request, res: Response, next: NextFunction) => {
    
    const userId: string = req.params.id;
    // const productId: string = req.body.productId
    // const quantity: number = parseInt(req.body.quantity)

    try {
        const showOrderByUser = await orderModel.showOrderByUser(userId)
        res.json({
            status: 'success',
            data: showOrderByUser,
            message: 'show order Successfully',
        })
        
    } catch (error) {
       
          next(error)

    }

}


