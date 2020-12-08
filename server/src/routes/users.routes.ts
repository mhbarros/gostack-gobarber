import {Router} from 'express';
import CreateUserService from "../service/CreateUserService";

const routes = Router();


routes.post('/create', async (req, res) => {
  const {name, email, password} = req.body;
  const createUser = new CreateUserService();

  try{
    const newUser = await createUser.execute({name, email, password});
    delete newUser.password;

    res.json(newUser);

  }catch (e) {
    return res.status(400).json({error: e.message});
  }
})

export default routes;
