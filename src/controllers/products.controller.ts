import { Request, Response, NextFunction } from "express";


class ProductsController {
    async index (req:Request, res:Response, next:NextFunction){
        try {

            

           return res.json({message: "ok"})
        } catch (error) {
            next(error)
        }
    }
}


export { ProductsController }