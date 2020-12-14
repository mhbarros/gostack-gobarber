import dotenv from 'dotenv';
import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors';

import routes from './routes';
import './db/';
import 'reflect-metadata';
import AppError from "./error/AppError";

dotenv.config();

const app = express();
app.use(express.json());
app.use(routes);
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if(err instanceof AppError){
    return response.status(err.statusCode).json({error: err.message});
  }

  console.error(err);
  return response.status(500).json({error: 'Internal server error'});
})

app.listen(3333);
