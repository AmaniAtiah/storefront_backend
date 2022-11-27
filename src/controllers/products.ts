import { NextFunction, Request, Response } from "express";
import ProductModel from "../models/product";



const productModel = new ProductModel();

export const create = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const product = await productModel.create(req.body)
        res.json({
            status: 'success',
            data: {...product},
            message: 'product created Successfully',
        })
        
    } catch (error) {
       
          next(error)

    }

}

export const fiveMostProduct = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const products = await productModel.fiveMostProduct()
        res.json({
            status: 'success',
            data: products,
            message: 'product retrived Successfully',
        })
    } catch (error) {
         next(error)

    }
  }



export const index = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await productModel.index()
        res.json({
            status: 'success',
            data: users,
            message: 'product retrived Successfully',
        })
    } catch (error) {
         next(error)

    }

}

export const show = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await productModel.show(req.params.id as unknown as string)
        res.json({
            status: 'success',
            data: user,
            message: 'product retrived Successfully',
        })
    } catch (error) {
        next(error)

    }

}


export const addProductAndCategory = async (_req: Request, res: Response) => {
    const productId: string = _req.body.productId
    const categoryId: string = _req.body.categoryId;
  
    try {
      const addedProduct = await productModel.addProductAndCategory(productId, categoryId)
      res.json({
        status: 'success',
        data: addedProduct,
        message: 'product retrived Successfully',
    })
    } catch(err) {
      res.status(400)
      res.json(err)
    }
  } 