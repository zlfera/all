import { MigrationInterface, QueryRunner } from 'typeorm';

export class setTableNull1670743257533 implements MigrationInterface {
  name = 'setTableNull1670743257533';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "myusers" ALTER COLUMN "no" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "myusers" ALTER COLUMN "name" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "myusers" ALTER COLUMN "password" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "myusers" ALTER COLUMN "sex" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "myusers" ALTER COLUMN "role_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "myusers" ALTER COLUMN "phone" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "myusers" ALTER COLUMN "is_valid" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "myusers" ALTER COLUMN "is_valid" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "myusers" ALTER COLUMN "phone" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "myusers" ALTER COLUMN "role_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "myusers" ALTER COLUMN "sex" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "myusers" ALTER COLUMN "password" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "myusers" ALTER COLUMN "name" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "myusers" ALTER COLUMN "no" SET NOT NULL`,
    );
  }
}
