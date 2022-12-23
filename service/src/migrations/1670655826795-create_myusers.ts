import { MigrationInterface, QueryRunner } from 'typeorm';

export class createMyusers1670655826795 implements MigrationInterface {
  name = 'createMyusers1670655826795';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "myusers" ("id" SERIAL NOT NULL, "no" character varying NOT NULL, "name" character varying NOT NULL, "password" character varying NOT NULL, "sex" integer NOT NULL, "role_id" integer NOT NULL, "phone" integer NOT NULL, "is_valid" character varying NOT NULL, CONSTRAINT "PK_adf0fc75117f253f54aa2a4a791" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "myusers"`);
  }
}
