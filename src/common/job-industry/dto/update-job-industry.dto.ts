import { PartialType } from '@nestjs/mapped-types';
import { CreateJobIndustryDto } from './create-job-industry.dto';

export class UpdateJobIndustryDto extends PartialType(CreateJobIndustryDto) {}
