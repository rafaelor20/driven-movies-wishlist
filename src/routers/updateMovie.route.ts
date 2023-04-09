import { Router } from 'express';
import { validateMovie } from '../middlewares/registerMovie.middleware.js';
import { updateMovie } from '../controllers/updateMovie.controller.js';

const updateMovieRoute = Router();

updateMovieRoute.put('/update-movie/:id', validateMovie, updateMovie);

export default updateMovieRoute;