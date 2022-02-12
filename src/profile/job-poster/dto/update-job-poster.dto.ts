import { PartialType } from '@nestjs/mapped-types';
import { CreateJobPosterDto } from './create-job-poster.dto';

export class UpdateJobPosterDto extends PartialType(CreateJobPosterDto) {}
