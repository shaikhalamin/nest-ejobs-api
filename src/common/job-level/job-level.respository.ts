/* eslint-disable prettier/prettier */
import { BadRequestException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateJobLevelDto } from './dto/create-job-level.dto';
import { JobLevel } from './entities/job-level.entity';


@EntityRepository(JobLevel)
export class JobLevelRepository extends Repository<JobLevel> {
    async addJobLevel(createJobLevelDto: CreateJobLevelDto) {
        try {
            const jobLevel = Object.assign(new JobLevel(), createJobLevelDto);
            return await this.save(jobLevel);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}