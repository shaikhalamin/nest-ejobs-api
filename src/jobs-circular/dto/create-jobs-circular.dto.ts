import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

@Exclude()
export class CreateJobsCircularDto {
  @Expose()
  @IsNotEmpty()
  job_title: string;

  @Expose()
  @IsNotEmpty()
  job_type: string;

  @Expose()
  @IsNotEmpty()
  job_category: string;

  @Expose()
  @IsNotEmpty()
  job_level: string;

  @Expose()
  @IsNotEmpty()
  no_of_positions: number;

  @Expose()
  @IsNotEmpty()
  salary: string;

  @Expose()
  @IsNotEmpty()
  education_qualification: string;

  @Expose()
  @IsNotEmpty()
  language_proficiency: string;

  @Expose()
  @IsNotEmpty()
  city: string;

  @Expose()
  @IsNotEmpty()
  country: string;

  @Expose()
  @IsNotEmpty()
  company: string;

  @Expose()
  @IsNotEmpty()
  is_verified: number;

  @Expose()
  @IsNotEmpty()
  tags: string;

  @Expose()
  @IsNotEmpty()
  ideal_candidate: string;

  @Expose()
  @IsNotEmpty()
  job_description: string;

  @Expose()
  @IsNotEmpty()
  job_benefits: string;

  @Expose()
  @IsNotEmpty()
  created_by: string;

  @Expose()
  @IsNotEmpty()
  updated_by: string;
}
