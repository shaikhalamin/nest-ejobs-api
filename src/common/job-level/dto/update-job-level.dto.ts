import { PartialType } from '@nestjs/mapped-types';
import { CreateJobLevelDto } from './create-job-level.dto';

export class UpdateJobLevelDto extends PartialType(CreateJobLevelDto) {}
