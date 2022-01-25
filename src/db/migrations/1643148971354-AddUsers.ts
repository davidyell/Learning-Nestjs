import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUsers1643148971354 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "users" (first_name, last_name) VALUES ('David', 'Yell'), ('Bruce', 'Willis')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM "users" WHERE last_name IN ('Yell', 'Willis')`,
    );
  }
}
