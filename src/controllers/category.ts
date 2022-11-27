import { NextFunction, Request, Response } from "express";
import CategoryModel from "../models/category";



const categoryModel = new CategoryModel();

export const create = async (req: Request, res: Response, next: NextFunction) => {
    

    try {
        const category = await categoryModel.create(req.body)
        res.json({
            status: 'success',
            data: {...category},
            message: 'category created Successfully',
        })
        
    } catch (error) {
       
          next(error)

    }

}


export const index = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await categoryModel.index()
        res.json({
            status: 'success',
            data: users,
            message: 'category retrived Successfully',
        })
    } catch (error) {
         next(error)

    }

}

export const show = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await categoryModel.show(req.params.id as unknown as string)
        res.json({
            status: 'success',
            data: user,
            message: 'category retrived Successfully',
        })
    } catch (error) {
        next(error)

    }

}

export const productByCategory = async (req: Request, res: Response, next: NextFunction) => {

    const categoryId: string = req.params.id;

    try {
        const products = await categoryModel.productByCategory(categoryId)
        res.json({
            status: 'success',
            data: products,
            message: 'product retrived Successfully',
        })
    } catch (error) {
         next(error)

    }
  }







