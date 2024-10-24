// const { CustomError } = require("../errors/customError");
import { CustomError } from "../errors/customError.js";

export const errorHandler = (err, req, res, next) => {
    console.log('Error Handler');
    console.log(err.message);
    if(err instanceof CustomError){
        res.status(err.statusCode).json({message: err.message, error: err.name});
    } else {
        res.status(500).json({message: err.message, error: 'Internal server error'});
    }
}