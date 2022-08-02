/* eslint-disable prettier/prettier */
import { BadRequestException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateJobIndustryDto } from './dto/create-job-industry.dto';
import { JobIndustry } from './entities/job-industry.entity';


@EntityRepository(JobIndustry)
export class JobIndustryRepository extends Repository<JobIndustry> {
    async addJobIndustry(createJobIndustryDto: CreateJobIndustryDto) {
        try {
            const jobIndustry = Object.assign(new JobIndustry(), createJobIndustryDto);
            return await this.save(jobIndustry);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}