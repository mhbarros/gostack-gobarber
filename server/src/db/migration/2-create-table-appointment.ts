import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createTableAppointment1606789361691 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'calendar.Appointment',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          isNullable: false,
          default: 'uuid_generate_v4()'
        },
        {
          name: 'id_provider',
          type: 'uuid',
          isNullable: true,
        },
        {
          name: 'date',
          type: 'timestamp with time zone',
          isNullable: false,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }))

    await queryRunner.createForeignKey('calendar.Appointment', new TableForeignKey({
      columnNames: ['id_provider'],
      referencedColumnNames: ['id'],
      referencedTableName: 'register.User',
      onDelete: 'set null',
      onUpdate: 'cascade',
      name: 'appointment_user'
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('calendar.Appointment');
  }

}
