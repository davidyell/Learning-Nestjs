import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryColumn({ nullable: false })
  @Generated('increment')
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;
}
