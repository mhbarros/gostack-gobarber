import {sign} from "jsonwebtoken";
import authConfig from "../config/auth.config";

interface RequestDTO {
  payload: TokenPayload,
  id: string
}

interface TokenPayload {
  user_name: string,
  user_email: string
}

export default class GenerateJWTService {
  public execute({id, payload}: RequestDTO): string{
    const {secret, expiresIn} = authConfig.jwt;

    return sign(payload, secret, {
      subject: id,
      expiresIn
    });
  }
}
