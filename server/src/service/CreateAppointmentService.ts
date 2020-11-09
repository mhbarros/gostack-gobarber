import Appointment from "../model/Appointment";
import {startOfHour} from "date-fns";
import AppointmentRepository from "../repository/AppointmentRepository";

interface RequestDTO {
  provider: string;
  date: Date
}

class CreateAppointmentService {

  private appointmentRepository: AppointmentRepository;

  constructor(appointmentRepository: AppointmentRepository) {
    this.appointmentRepository = appointmentRepository;
  }

  public execute({provider, date}: RequestDTO): Appointment{
    const appointmentDate = startOfHour(date);
    const findAppointmentInSameDate = this.appointmentRepository.findByDate(appointmentDate);

    if (findAppointmentInSameDate) {
      throw Error('This date has already been booked.');
    }

    return this.appointmentRepository.create({provider, date: appointmentDate});;
  }
}

export default CreateAppointmentService;
