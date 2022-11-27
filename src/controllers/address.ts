import { NextFunction, Request, Response } from "express";
import AddressModel from "../models/address";



const addressModel = new AddressModel();

export const createAddress = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const address = await addressModel.createAddress(req.body)
        res.json({
            status: 'success',
            data: {...address},
            message: 'address created Successfully',
        })
        
    } catch (error) {
       
          next(error)

    }

}

export const addUserAddress = async (req: Request, res: Response, next: NextFunction) => {
    
    const userId: string = req.params.id
    const addressId: string = req.body.addressId
    const is_default: number = parseInt(req.body.is_default)
    try {
        const addaddress = await addressModel.addUserAddress(userId, addressId, is_default)
        res.json({
            status: 'success',
            data: {...addaddress},
            message: 'add user address Successfully',
        })
        
    } catch (error) {
       
          next(error)

    }

}


export const showAddressByUser = async (req: Request, res: Response, next: NextFunction) => {
    
    const userId: string = req.params.id

    try {
        const showuserAddress = await addressModel.showAddressByUser(userId)
        res.json({
            status: 'success',
            data: showuserAddress,
            message: 'show addresses by user Successfully',
        })
        
    } catch (error) {
       
          next(error)

    }

}
