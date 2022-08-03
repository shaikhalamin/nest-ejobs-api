/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateEmploymentTypeDto } from './dto/create-employment-type.dto';
import { UpdateEmploymentTypeDto } from './dto/update-employment-type.dto';
import { EmploymentTypeRepository } from './employment-type.respository';

@Injectable()
export class EmploymentTypeService {
  constructor(
    private readonly employmentTypeRepository: EmploymentTypeRepository,
  ) { }

  create(createEmploymentTypeDto: CreateEmploymentTypeDto) {
    return this.employmentTypeRepository.addEmploymentType(createEmploymentTypeDto);
  }

  findAll() {
    return this.employmentTypeRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} employmentType`;
  }

  update(id: number, updateEmploymentTypeDto: UpdateEmploymentTypeDto) {
    return `This action updates a #${id} employmentType`;
  }

  remove(id: number) {
    return `This action removes a #${id} employmentType`;
  }
}
