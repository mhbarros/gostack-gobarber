import {getRepository} from "typeorm";
import User from "../model/User";
import * as path from "path";

import uploadConfig from '../config/upload.config';
import * as fs from "fs";

interface RequestDTO {
  user_id: string,
  avatar_filename: string
}

class UpdateUserAvatarService {
  public async execute({user_id, avatar_filename}: RequestDTO): Promise<User> {

    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);
    if(!user){
      throw new Error('Sign in to access this feature');
    }

    if(user.avatar){
      const userAvatarFilePath = path.resolve(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if(userAvatarFileExists){
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatar_filename;
    await usersRepository.save(user);

    return user;

  }
}

export default UpdateUserAvatarService;
