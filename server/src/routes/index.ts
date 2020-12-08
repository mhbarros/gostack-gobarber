import {Router} from "express";
import AppointmentRoutes from './appointments.routes';
import UserRoutes from './users.routes';

const routes = Router();

routes.use('/appointment', AppointmentRoutes);
routes.use('/user', UserRoutes);

export default routes;
