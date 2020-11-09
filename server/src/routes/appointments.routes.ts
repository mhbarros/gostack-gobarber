import {Router} from 'express';
import {parseISO} from 'date-fns';

import AppointmentRepository from "../repository/AppointmentRepository";
import CreateAppointmentService from "../service/CreateAppointmentService";

const routes = Router();
const appointmentRepository = new AppointmentRepository();

routes.get('/', (req, res) => {
  const appointments = appointmentRepository.all();
  res.json({ok: true, data: appointments});
})


routes.post('/create', (req, res) => {
  try{
    const {provider, date} = req.body;

    const parsedDate = parseISO(date);

    const createAppointmentService = new CreateAppointmentService(appointmentRepository);

    const appointment = createAppointmentService.execute({provider, date: parsedDate});


    res.json({ok: true, data: appointment});
  }catch (e) {
    return res.status(400).json({ok: false, msg: e.message});
  }
})

export default routes;
