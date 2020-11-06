import {Router} from 'express';
import {startOfHour, parseISO} from 'date-fns';

import AppointmentRepository from "../repository/AppointmentRepository";

const routes = Router();
const appointmentRepository = new AppointmentRepository();


routes.post('/create', (req, res) => {
  const {provider, date} = req.body;

  const parsedDate = startOfHour(parseISO(date));
  const findAppointmentInSameDate = appointmentRepository.findByDate(parsedDate);

  if (findAppointmentInSameDate) {
    return res.status(400).json({ok: false, msg: 'This date is already booked'});
  }

  const appointment = appointmentRepository.create(provider, parsedDate);

  res.json({ok: true, data: appointment});
})

export default routes;
