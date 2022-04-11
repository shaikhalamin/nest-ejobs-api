import { Injectable } from '@nestjs/common';
import { CreateEmploymentTypeDto } from './dto/create-employment-type.dto';
import { UpdateEmploymentTypeDto } from './dto/update-employment-type.dto';

@Injectable()
export class EmploymentTypeService {
  create(createEmploymentTypeDto: CreateEmploymentTypeDto) {
    return 'This action adds a new employmentType';
  }

  findAll() {
    return `This action returns all employmentType`;
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
