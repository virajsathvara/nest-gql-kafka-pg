import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UsersRepository } from './users/users.repository';

const entities = [User];
const repositories = [UsersRepository];
@Global()
@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  exports: [...repositories],
  providers: [...repositories],
})
export class DatabaseModule {}
