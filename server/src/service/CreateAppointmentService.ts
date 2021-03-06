import Appointment from "../model/Appointment";
import {startOfHour} from "date-fns";
import AppointmentRepository from "../repository/AppointmentRepository";
import {getCustomRepository} from 'typeorm';
import AppError from "../error/AppError";

interface RequestDTO {
  id_provider: string;
  date: Date
}

class CreateAppointmentService {

  public async execute({id_provider, date}: RequestDTO): Promise<Appointment>{
    const appointmentRepository = getCustomRepository(AppointmentRepository);

    const appointmentDate = startOfHour(date);
    const findAppointmentInSameDate = await appointmentRepository.findByDate(appointmentDate);

    if (findAppointmentInSameDate) {
      throw new AppError('This date has already been booked.', 400);
    }

    const appointment = appointmentRepository.create({id_provider, date: appointmentDate});
    await appointmentRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
