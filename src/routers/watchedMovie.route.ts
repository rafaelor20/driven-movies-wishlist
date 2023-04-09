import { Router } from 'express';
import { watchedMovie } from '../controllers/watchedMovie.controller.js';

const watchedMovieRoute = Router();

watchedMovieRoute.patch('/watched-movie/:id', watchedMovie);

export default watchedMovieRoute;