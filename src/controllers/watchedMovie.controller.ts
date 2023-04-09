import { Request, Response } from "express";
import httpStatus from "http-status";
import { db } from "../config/database.js";

export async function watchedMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;

    const checkId = await db.query(`SELECT id from movies WHERE id = $1`, [id]);
    if (checkId.rowCount === 0){
      return res.status(httpStatus.EXPECTATION_FAILED).send("Wrong id");
    }

    await db.query(`UPDATE movies SET
    watched = true
    WHERE id = $1;`, 
    [id]);

    return res.status(httpStatus.ACCEPTED).send("Movie updated successfully");
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send( err.message );
  }
}