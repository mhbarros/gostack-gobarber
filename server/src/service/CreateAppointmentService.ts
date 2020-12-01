import Appointment from "../model/Appointment";
import {startOfHour} from "date-fns";
import AppointmentRepository from "../repository/AppointmentRepository";
import {getCustomRepository} from 'typeorm';

interface RequestDTO {
  provider: string;
  date: Date
}

class CreateAppointmentService {

  public async execute({provider, date}: RequestDTO): Promise<Appointment>{
    const appointmentRepository = getCustomRepository(AppointmentRepository);

    const appointmentDate = startOfHour(date);
    const findAppointmentInSameDate = await appointmentRepository.findByDate(appointmentDate);

    if (findAppointmentInSameDate) {
      throw Error('This date has already been booked.');
    }

    const appointment = appointmentRepository.create({provider, date: appointmentDate});
    await appointmentRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
