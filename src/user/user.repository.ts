import { BadRequestException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async addUser(userDto: CreateUserDto): Promise<User> {
    try {
      const user = Object.assign(new User(), userDto);
      return await this.save(user);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(): Promise<User[]> {
    try {
      return await this.find({});
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findById(id: number): Promise<User> {
    try {
      return this.findOne(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findByUserName(username: string): Promise<User> {
    try {
      return await this.findOne({ username });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updateUser(
    user: User,
    userUpdateRequestDto: UpdateUserDto,
  ): Promise<User> {
    try {
      const updated_user = Object.assign(user, userUpdateRequestDto);
      return await this.save(updated_user);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
