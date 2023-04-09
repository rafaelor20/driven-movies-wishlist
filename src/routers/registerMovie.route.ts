import { Router } from 'express';
import { validateMovie } from '../middlewares/registerMovie.middleware.js';
import { registerMovie } from '../controllers/registerMovie.controller.js';

const registerMovieRoute = Router();

registerMovieRoute.post('/register-movie', validateMovie, registerMovie);

export default registerMovieRoute;