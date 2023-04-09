import { Request, Response, NextFunction } from "express";
import httpStatus from 'http-status';
import { movieSchema } from "../schemas/movie.schema";


export function validateMovie(req: Request, res: Response, next: NextFunction) {
    try {
        const { error } = movieSchema.validate(req.body);
        if (error) {
            const errorMessage = error.details.map((d) => d.message).join(", ");
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errorMessage);
        }
        res.locals.movie = req.body;
        return next();
    }
    catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    }
}