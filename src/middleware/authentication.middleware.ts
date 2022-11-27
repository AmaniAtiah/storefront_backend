import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import Error from "../interfaces/error.interface";

const handleUnauthorizedError = (next: NextFunction) => {
    const error: Error = new Error('Login Error: Please try again');
    error.status = 401;
    next(error);


}
const validationTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const tokenSecret = process.env.TOKEN_SECRET;
        const authHeader = req.get('Authorization');
        if(authHeader) {
            const bearer = authHeader.split(' ')[0].toLowerCase();
            const token = authHeader.split(' ')[1];
            if(token && bearer === 'bearer') {
                const decode = jwt.verify(token, tokenSecret as unknown as string)

                if(decode) {
                    next()
                } else {
                    handleUnauthorizedError(next)
                }


            } else {
                  handleUnauthorizedError(next)

            }


        } else {
            handleUnauthorizedError(next)

        }     

    } catch (error) {
        handleUnauthorizedError(next)

    }
}
 
export default validationTokenMiddleware;