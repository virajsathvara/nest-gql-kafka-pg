import * as dotenv from 'dotenv';
dotenv.config();
import { DataSource } from 'typeorm';

const appDataSource: DataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['/src/database/**/*.entity{.ts,.js}'],
  migrations: ['/src/database/migrations/*{.ts,.js}'],
  synchronize: false,
});

export default appDataSource;
