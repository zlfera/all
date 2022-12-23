import { MigrationInterface, QueryRunner } from "typeorm";

export class createMyusersToUuid1670658859841 implements MigrationInterface {
    name = 'createMyusersToUuid1670658859841'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "myusers" DROP CONSTRAINT "PK_adf0fc75117f253f54aa2a4a791"`);
        await queryRunner.query(`ALTER TABLE "myusers" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "myusers" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "myusers" ADD CONSTRAINT "PK_adf0fc75117f253f54aa2a4a791" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "myusers" DROP CONSTRAINT "PK_adf0fc75117f253f54aa2a4a791"`);
        await queryRunner.query(`ALTER TABLE "myusers" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "myusers" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "myusers" ADD CONSTRAINT "PK_adf0fc75117f253f54aa2a4a791" PRIMARY KEY ("id")`);
    }

}
