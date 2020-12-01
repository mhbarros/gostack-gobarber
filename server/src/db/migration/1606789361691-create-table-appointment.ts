import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableAppointment1606789361691 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'calendar.Appointment',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          length: '40',
          isPrimary: true,
          generationStrategy: 'uuid',
          isNullable: false,
          default: 'uuid_generate_v4()'
        },
        {
          name: 'provider',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'date',
          type: 'timestamp with time zone',
          isNullable: false,
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('calendar.Appointment');
  }

}
