import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

const coreModules = [
  ConfigModule.forRoot({ isGlobal: true }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['/src/database/**/*.entity{.ts,.js}'],
    migrations: ['/src/database/migrations/*{.ts,.js}'],
    synchronize: false,
    autoLoadEntities: true,
  }),
];

const utilityModules = [DatabaseModule];

const featureModules = [UsersModule];

@Module({
  imports: [...coreModules, ...utilityModules, ...featureModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
