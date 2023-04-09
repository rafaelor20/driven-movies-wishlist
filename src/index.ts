import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import registerMovieRoute from './routers/registerMovie.route.js';
import updateMovieRoute from './routers/updateMovie.route.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use([registerMovieRoute, updateMovieRoute ])

const port = process.env.PORT || 5000;
//const port = 5000;
app.listen(port, () => console.log(`Server running in port ${port}`));
