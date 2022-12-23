import { DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'xin',
  entities: [User],
  migrations: ['./migrations/*.ts'],
});
