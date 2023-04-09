import { Request, Response, NextFunction } from "express";
import httpStatus from 'http-status';
import { movieSchema } from "../schemas/movie.schema.js";


export function validateMovie(req: Request, res: Response, next: NextFunction) {
    try {
        const { error } = movieSchema.validate(req.body);
        if (error) {
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error);
            //return res.status(422).send(error);
        }
        res.locals.movie = req.body;
        return next();
    }
    catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
        //return res.status(500).send(err.message);
    }
}