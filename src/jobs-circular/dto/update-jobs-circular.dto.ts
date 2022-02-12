import { PartialType } from '@nestjs/mapped-types';
import { CreateJobsCircularDto } from './create-jobs-circular.dto';

export class UpdateJobsCircularDto extends PartialType(CreateJobsCircularDto) {}
