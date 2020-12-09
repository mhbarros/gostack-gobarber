/*
import { Request } from 'express-serve-static-core';

declare module 'express-serve-static-core'{
  export interface Request {
    user: {
      id: string
    };
  }
}
*/

declare namespace Express {
  export interface Request {
    user: {
      id: string;
    }
  }
}
