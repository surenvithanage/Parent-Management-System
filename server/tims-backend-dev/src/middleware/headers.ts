import { Request, Response, NextFunction } from "express";

export const appendHeaders = (req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', ['POST', 'GET', 'DELETE', 'PUT']);
    next();
}