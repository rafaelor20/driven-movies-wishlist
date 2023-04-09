import { Request, Response } from "express";
import httpStatus from "http-status";
import { db } from "../config/database.js";

export async function registerMovie(req: Request, res: Response) {
  try {
    const movie = res.locals.movie;
    console.log(movie)
    await db.query(`INSERT INTO movies 
    (title, release_year, image_url, director, main_actor, genre, synopsis)
    VALUES ($1, $2, $3, $4, $5, $6, $7)`, 
    [movie.title, movie.release_year, movie.image_url, movie.director, movie.main_actor, movie.genre, movie.synopsis]);

    return res.status(httpStatus.CREATED).send("Movie registered successfully" );
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send( err.message );
  }
}
