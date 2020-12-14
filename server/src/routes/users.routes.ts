import {Router} from 'express';
import multer from "multer";

import uploadConfig from '../config/upload.config';
import CreateUserService from "../service/CreateUserService";
import authentication from '../middleware/authentication';
import UpdateUserAvatarService from "../service/UpdateUserAvatarService";

const routes = Router();
const upload = multer(uploadConfig);


routes.post('/create', async (req, res) => {
  const {name, email, password} = req.body;
  const createUser = new CreateUserService();


  const newUser = await createUser.execute({name, email, password});
  delete newUser.password;

  res.json(newUser);
})

routes.patch('/avatar', authentication, upload.single('avatar'), async (req, res) => {
  const file = req.file;

  const updateUserAvatarService = new UpdateUserAvatarService();
  const updatedUser = await updateUserAvatarService.execute({user_id: req.user.id, avatar_filename: file.filename});

  delete updatedUser.password;

  return res.json(updatedUser);
})

export default routes;
