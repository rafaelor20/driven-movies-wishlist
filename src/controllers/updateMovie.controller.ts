import { Request, Response } from "express";
import httpStatus from "http-status";
import { db } from "../config/database.js";

export async function updateMovie(req: Request, res: Response) {
  try {
    const movie = res.locals.movie;
    const id = req.params.id;

    const checkId = await db.query(`SELECT id from movies WHERE id = $1`, [id]);
    if (checkId.rowCount === 0){
      return res.status(httpStatus.EXPECTATION_FAILED).send("Wrong id");
    }

    await db.query(`UPDATE movies SET
    title = $1, release_year = $2, image_url = $3, director = $4, main_actor = $5, genre = $6, synopsis = $7
    WHERE id = $8;`, 
    [movie.title, movie.release_year, movie.image_url, movie.director, movie.main_actor, movie.genre, movie.synopsis, id]);

    return res.status(httpStatus.ACCEPTED).send("Movie updated successfully");
    //return res.status(201).send("Movie registered successfully" );
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send( err.message );
    //return res.status(500).send( err.message );
  }
}