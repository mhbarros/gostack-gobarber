import {NextFunction, Request, Response} from "express";
import {verify} from "jsonwebtoken";

import authConfig from "../config/auth.config";
import AppError from "../error/AppError";

interface DecodedToken {
  iat: number;
  exp: number;
  sub: string;
}

export default (request: Request, response: Response, next: NextFunction): void => {
  const {authorization} = request.headers;
  if(!authorization){
    throw new AppError('Token is missing', 403);
  }

  const [, token] = authorization.split(' ')

  try{
    const decodedToken = verify(token, authConfig.jwt.secret) as DecodedToken;
    request.user = {
      id: decodedToken.sub
    }

    next();
  }catch (e){
    throw new AppError('Login to access this feature.', 403)
  }

}
