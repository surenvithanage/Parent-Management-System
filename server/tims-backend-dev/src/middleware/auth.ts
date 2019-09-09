import { Request, Response, NextFunction } from "express";
import { HTTP403Error, HTTP401Error } from "../utils/httpErrors";
import { handleError } from "../utils";
import jwt from 'jsonwebtoken';
import config from "../config";

export const verifyJWTToken = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const token = req.headers['authorization'];

        if (!token) {
            throw new HTTP403Error('Missing auth token');
        }

        let verify;
        try {

            verify = await jwt.verify(token, config.jwt.secret);
        } catch (error) {
            throw new HTTP401Error('Invalid token');
        }

        if (verify) {
            next();
        } else {
            throw new HTTP401Error('Invalid token');
        }
    } catch (error) {
        handleError(error, res);
    }
}