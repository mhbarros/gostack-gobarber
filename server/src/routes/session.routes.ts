import {Router} from 'express';
import AuthenticateUserService from "../service/AuthenticateUserService";

const routes = Router();

routes.post('/create', async (req, res) => {
  let {email, password} = req.body;


  const authenticateUserService = new AuthenticateUserService();
  try{
    const userAuthenticated = await authenticateUserService.execute({email, password});
    delete userAuthenticated.user.password;

    res.json(userAuthenticated);

  }catch (e) {
    res.status(400).json({error: e.message});
  }
})

export default routes;
