import 'reflect-metadata';
import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();

import { registerMovieRoute } from './routers/registerMovie.route';

const app = express();

app.use(express.json());
app.use(cors());

app.use([registerMovieRoute ])

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port ${port}`));
