import { Router } from 'express';
import { deleteMovie } from '../controllers/deleteMovie.controller.js';

const deleteMovieRoute = Router();

deleteMovieRoute.delete('/delete-movie/:id', deleteMovie);

export default deleteMovieRoute;