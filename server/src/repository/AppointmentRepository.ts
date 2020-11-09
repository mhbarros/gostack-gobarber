import Appointment from "../model/Appointment";
import {isEqual} from "date-fns";

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentRepository {

  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public create({provider, date} : CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({provider, date});

    this.appointments.push(appointment);

    return appointment;
  }

  public findByDate(date: Date): Appointment | null {
    return this.appointments.find(d => isEqual(date, d.date)) || null;
  }
}

export default AppointmentRepository;
