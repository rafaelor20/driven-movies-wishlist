import { Router } from 'express';
import { getMovies } from '../controllers/getMovies.controller.js';

const getMoviesRoute = Router();

getMoviesRoute.get('/get-movies', getMovies);

export default getMoviesRoute;