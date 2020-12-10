import {NextFunction, Request, Response} from "express";
import {verify} from "jsonwebtoken";

import authConfig from "../config/auth.config";

interface DecodedToken {
  iat: number;
  exp: number;
  sub: string;
}

export default (request: Request, response: Response, next: NextFunction): void => {
  const {authorization} = request.headers;
  if(!authorization){
    response.status(403).json({error: 'Token is missing'});
    return;
  }

  const [, token] = authorization.split(' ')

  try{
    const decodedToken = verify(token, authConfig.jwt.secret) as DecodedToken;
    request.user = {
      id: decodedToken.sub
    }

    next();
  }catch (e){
    response.status(403).json({error: 'Login to access this feature.'});
  }

}
