import {Router} from 'express';
import {parseISO} from 'date-fns';

import {getCustomRepository} from 'typeorm';

import AppointmentRepository from "../repository/AppointmentRepository";
import CreateAppointmentService from "../service/CreateAppointmentService";

const routes = Router();

routes.get('/', async (req, res) => {
  const appointmentRepository = getCustomRepository(AppointmentRepository);
  const appointments = await appointmentRepository.find();

  res.json(appointments);
})


routes.post('/create', async (req, res) => {
  try{
    const {id_provider, date} = req.body;

    const parsedDate = parseISO(date);

    const createAppointmentService = new CreateAppointmentService();

    const appointment = await createAppointmentService.execute({id_provider, date: parsedDate});

    res.json(appointment);
  }catch (e) {
    return res.status(400).json({ok: false, msg: e.message});
  }
})

export default routes;
