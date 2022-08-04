import { Injectable } from '@nestjs/common';
import { CreateJobsCircularDto } from './dto/create-jobs-circular.dto';
import { UpdateJobsCircularDto } from './dto/update-jobs-circular.dto';
import { JobsCircularRepository } from './jobs-circular.repository';

@Injectable()
export class JobsCircularService {
  constructor(private readonly jobCircularRepository: JobsCircularRepository) {}

  create(createJobsCircularDto: CreateJobsCircularDto) {
    return this.jobCircularRepository.addJobCircular(createJobsCircularDto);
  }

  findAll() {
    return this.jobCircularRepository.find({
      relations: ['company', 'employmentType', 'jobIndustry', 'jobLevel'],
    });
  }

  findOne(id: number) {
    return this.jobCircularRepository.findOne(id, {
      relations: ['company', 'employmentType', 'jobIndustry', 'jobLevel'],
    });
  }

  update(id: number, updateJobsCircularDto: UpdateJobsCircularDto) {
    return `This action updates a #${id} jobsCircular`;
  }

  remove(id: number) {
    return this.jobCircularRepository.delete(+id);
  }
}
