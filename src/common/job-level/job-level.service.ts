/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateJobLevelDto } from './dto/create-job-level.dto';
import { UpdateJobLevelDto } from './dto/update-job-level.dto';
import { JobLevelRepository } from './job-level.respository';

@Injectable()
export class JobLevelService {
  constructor(private readonly jobLevelRepository: JobLevelRepository) { }

  create(createJobLevelDto: CreateJobLevelDto) {
    return this.jobLevelRepository.addJobLevel(createJobLevelDto);
  }

  findAll() {
    return this.jobLevelRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} jobLevel`;
  }

  update(id: number, updateJobLevelDto: UpdateJobLevelDto) {
    return `This action updates a #${id} jobLevel`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobLevel`;
  }
}
