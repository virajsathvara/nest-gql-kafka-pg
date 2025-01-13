import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../database/users/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: User) {
    return this.usersService.createUser(createUserDto);
  }
}
