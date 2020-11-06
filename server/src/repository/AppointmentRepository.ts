import Appointment from "../model/Appointment";
import {isEqual} from "date-fns";

class AppointmentRepository {

  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public create(provider: string, date: Date): Appointment {
    const appointment = new Appointment(provider, date);

    this.appointments.push(appointment);

    return appointment;
  }

  public findByDate(date: Date): Appointment | null {
    return this.appointments.find(d => isEqual(date, d.date)) || null;
  }
}

export default AppointmentRepository;
