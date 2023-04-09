import { Request, Response } from "express";
import httpStatus from "http-status";
import { db } from "../config/database.js";

export async function getMovies(req: Request, res: Response) {
  try {
    const movies = await db.query(`SELECT * from movies`);
    return res.status(httpStatus.OK).send(movies.rows);
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send( err.message );
  }
}