import { Router } from 'express';
import { validateMovie } from '../middlewares/registerMovie.middleware';
import { registerMovie } from '../controllers/registerMovie.controller';

const registerMovieRoute = Router();

registerMovieRoute.post('/register-movie', validateMovie, registerMovie);

export { registerMovieRoute };