import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ControllerInterface } from 'src/shared/interfaces/controller.interface';
import { UserResponse } from './dto/response-user.dto';
import { plainToInstance } from 'class-transformer';

@Controller('users')
export class UserController implements ControllerInterface {
  constructor(private readonly userService: UserService) {}
  @Get()
  async findAll(): Promise<UserResponse[]> {
    return await this.userService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() body: CreateUserDto): Promise<UserResponse> {
    return plainToInstance(UserResponse, await this.userService.create(body));
  }

  @Get(':id')
  async findOne(id: string): Promise<UserResponse> {
    return plainToInstance(UserResponse, await this.userService.findOne(+id));
  }

  @Patch(':id')
  async update(
    id: string,
    @Body() body?: UpdateUserDto,
    req?: any,
  ): Promise<UserResponse> {
    return plainToInstance(
      UserResponse,
      await this.userService.update(+id, body),
    );
  }

  @Delete(':id')
  remove(id: string, req?: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
