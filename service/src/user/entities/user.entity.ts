import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('myusers')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column({ nullable: true })
  no: string;
  @Column({ nullable: true })
  name: string;
  @Column({ nullable: true })
  password: string;
  @Column({ nullable: true })
  sex: number;
  @Column({ nullable: true })
  role_id: number;
  @Column({ nullable: true })
  phone: number;
  @Column({ nullable: true })
  is_valid: string;
}
