/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateJobIndustryDto } from './dto/create-job-industry.dto';
import { UpdateJobIndustryDto } from './dto/update-job-industry.dto';
import { JobIndustryRepository } from './job-industry.repository';

@Injectable()
export class JobIndustryService {
  constructor(private readonly jobIndustryRepository: JobIndustryRepository) { }

  create(createJobIndustryDto: CreateJobIndustryDto) {
    return this.jobIndustryRepository.addJobIndustry(createJobIndustryDto);
  }

  findAll() {
    return this.jobIndustryRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} jobIndustry`;
  }

  update(id: number, updateJobIndustryDto: UpdateJobIndustryDto) {
    return `This action updates a #${id} jobIndustry`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobIndustry`;
  }
}
