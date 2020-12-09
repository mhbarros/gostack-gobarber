import {Router} from "express";
import AppointmentRoutes from './appointments.routes';
import UserRoutes from './users.routes';
import SessionRoutes from './session.routes';

const routes = Router();

routes.use('/appointment', AppointmentRoutes);
routes.use('/user', UserRoutes);
routes.use('/session', SessionRoutes)

export default routes;
