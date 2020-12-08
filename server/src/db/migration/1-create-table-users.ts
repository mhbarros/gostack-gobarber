import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class createUsers1606789361690 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'register.User',
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
          name: 'name',
          type: 'varchar',
          isNullable: false,
          length: '80',
        },
        {
          name: 'email',
          type: 'varchar',
          isNullable: false,
          isUnique: true
        },
        {
          name: 'password',
          type: 'varchar'
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('register.User');
  }

}
