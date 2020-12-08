import {getRepository} from 'typeorm';
import User from "../model/User";

import {hash} from 'bcryptjs';



interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({name, email, password}: Request): Promise<User> {
    const userRepository = getRepository(User);

    const checkUserExists = await userRepository.findOne({where: {email}});
    if(checkUserExists){
      throw new Error('E-mail address already exists');
    }

    const hashedPassword = await hash(password, 8);

    const newUser = userRepository.create({
      name,
      email,
      password: hashedPassword
    });

    await userRepository.save(newUser);

    return newUser;
  }
}

export default CreateUserService;
