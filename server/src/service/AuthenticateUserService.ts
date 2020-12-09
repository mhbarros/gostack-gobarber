import {getRepository} from "typeorm";
import User from "../model/User";
import {compare} from "bcryptjs";
import {sign} from 'jsonwebtoken';
import GenerateJWTService from "./GenerateJWTService";

interface RequestDTO {
  email: string,
  password: string
}

export default class AuthenticateUserService {

  public async execute({email, password}: RequestDTO): Promise<{ user: User, token: string }> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({
      where: {email}
    });

    if (!user || !user.password) {
      throw new Error('Incorrect e-mail or password');
    }

    const userPasswordMatch = await compare(password, user.password);
    if (!userPasswordMatch) {
      throw new Error('Incorrect e-mail or password');
    }

    const generateJwtService = new GenerateJWTService();
    const token = generateJwtService.execute({
      id: user.id,
      payload: {
        user_email: user.email,
        user_name: user.name
      }
    });

    return {user, token};
  }
}
