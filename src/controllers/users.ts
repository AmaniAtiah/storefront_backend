import { NextFunction, Request, Response } from "express";
import UserModel from "../models/user";
import jwt from "jsonwebtoken";



const userModel = new UserModel();

export const create = async (req: Request, res: Response, next: NextFunction) => {
    

    try {
        const user = await userModel.create(req.body)
        res.json({
            status: 'success',
            data: {...user},
            message: 'User created Successfully',
        })
        
    } catch (error) {
       
          next(error)

    }

}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tokenSecret = process.env.TOKEN_SECRET;

         
        const {email, password} = req.body;
        const user = await userModel.authenticate(email, password)

        const token = jwt.sign({user}, tokenSecret as unknown as string)
        if(!user) {
            return res.status(401).json({
                status: 'error',
                message: 'the username and password does not match any user please try again'
            })
        }
        return res.json({
            status: 'success',
            data: {...user, token},
            message: 'User authenticated Successfully',
        })

    } catch (error) {
        return next(error)

    }

}

export const index = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userModel.index()
        res.json({
            status: 'success',
            data: users,
            message: 'User retrived Successfully',
        })
    } catch (error) {
         next(error)

    }

}

export const show = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userModel.show(req.params.id as unknown as string)
        res.json({
            status: 'success',
            data: user,
            message: 'User retrived Successfully',
        })
    } catch (error) {
        next(error)

    }

}


