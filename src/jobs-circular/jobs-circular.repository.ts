/* eslint-disable prettier/prettier */
import { BadRequestException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateJobsCircularDto } from './dto/create-jobs-circular.dto';
import { JobCircular } from './entities/job-circular.entity';

@EntityRepository(JobCircular)
export class JobsCircularRepository extends Repository<JobCircular> {
    async addJobCircular(jobsCircularDto: CreateJobsCircularDto) {
        try {
            const jobCircular = Object.assign(new JobCircular(), jobsCircularDto) as JobCircular;
            //jobCircular.jobCircularJobLocations = jobsCircularDto.jobLocations
            return await this.save(jobCircular);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}
