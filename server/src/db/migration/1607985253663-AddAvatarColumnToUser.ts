import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export default class AddAvatarColumnToUser1607985253663 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('register.User', new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('register.User', 'avatar');
    }

}
