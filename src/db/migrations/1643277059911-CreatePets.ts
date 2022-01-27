import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePets1643277059911 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE pets (id INT NOT NULL, name VARCHAR NOT NULL, user_id INT NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO pets (id, name, user_id) VALUES (1, 'Zeus', 1), (2, 'Brandy', 2)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE pets`);
  }
}
