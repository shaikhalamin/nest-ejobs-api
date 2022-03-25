import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ServiceInterface } from 'src/shared/interfaces/service.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponse } from './dto/response-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService implements ServiceInterface {
  constructor(private userRepository: UserRepository) {}

  async findAll(): Promise<UserResponse[]> {
    return plainToInstance(UserResponse, await this.userRepository.findAll());
  }

  async create(body: CreateUserDto): Promise<User> {
    return await this.userRepository.addUser(body);
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findById(+id);
    if (!user) {
      throw new NotFoundException('User not found !');
    }
    return user;
  }

  async update(id: number, body?: UpdateUserDto): Promise<any> {
    const user = await this.findOne(id);
    return await this.userRepository.updateUser(user, body);
  }

  remove(id: number, req?: any): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async findByUserName(username: string): Promise<User> {
    return await this.userRepository.findByUserName(username);
  }
}
