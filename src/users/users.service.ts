import { Injectable } from '@nestjs/common';
import { User } from '../database/users/user.entity';
import { UsersRepository } from '../database/users/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async createUser(user: User) {
    try {
      const savedUser = await this.userRepository.saveOne(user);
      console.log('User saved successfully');
      return savedUser;
    } catch (error) {
      throw new Error(error);
    }
  }
}
