/* eslint-disable prettier/prettier */
import { BadRequestException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateEmploymentTypeDto } from './dto/create-employment-type.dto';
import { EmploymentType } from './entities/employment-type.entity';

@EntityRepository(EmploymentType)
export class EmploymentTypeRepository extends Repository<EmploymentType> {
    async addEmploymentType(createEmploymentTypeDto: CreateEmploymentTypeDto) {
        try {
            const employmentType = Object.assign(new EmploymentType(), createEmploymentTypeDto);
            return await this.save(employmentType);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}