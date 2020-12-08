import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne, JoinColumn
} from 'typeorm';
import User from "./User";

@Entity('calendar.Appointment')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  id_provider: string;

  @ManyToOne(() => User)
  @JoinColumn({name: 'id_provider'})
  provider: User

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}

export default Appointment;
