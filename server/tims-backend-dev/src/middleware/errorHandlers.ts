import { Request, Response, NextFunction, Router } from 'express';
import * as ErrorHandler from "../utils/ErrorHandler";



const handleClientErrors = (router: Router) => {
    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        console.log('handling client error');
        ErrorHandler.clientError(err, res, next);
    });
}

const handleServerError = (router: Router) => {
    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        ErrorHandler.serverError(err, res, next);
    });
};

export default [handleClientErrors, handleServerError];