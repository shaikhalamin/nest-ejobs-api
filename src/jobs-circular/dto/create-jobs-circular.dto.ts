import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';

@Exclude()
export class CreateJobsCircularDto {
  @Expose()
  @IsNotEmpty()
  title: string;

  @Expose()
  @IsOptional()
  @IsNotEmpty()
  noOfPositions: number;

  @Expose()
  @IsOptional()
  @IsNotEmpty()
  salary: string;

  @Expose()
  @IsOptional()
  @IsNotEmpty()
  languageProficiency: string;

  @Expose()
  @IsNotEmpty()
  country: string;

  @Expose()
  @IsOptional()
  @IsNotEmpty()
  age: string;

  @Expose()
  @IsOptional()
  @IsNotEmpty()
  isVerified: boolean;

  @Expose()
  @IsOptional()
  @IsNotEmpty()
  isPublished: boolean;

  @Expose()
  @IsOptional()
  @IsNotEmpty()
  isFeatured: number;

  // status (draft, active, closed, expired)
  @Expose()
  @IsNotEmpty()
  status: string;

  @Expose()
  @IsOptional()
  @IsNotEmpty()
  jobResponsibilities: string;

  @Expose()
  @IsOptional()
  @IsNotEmpty()
  educationRequirements: string;

  @Expose()
  @IsOptional()
  @IsNotEmpty()
  experienceRequirements: string;

  @Expose()
  @IsOptional()
  @IsNotEmpty()
  additionalRequirements: string;

  @Expose()
  @IsOptional()
  @IsNotEmpty()
  compensationsJobBenefits: string;

  @Expose()
  @IsOptional()
  @IsNotEmpty()
  applicationDeadline: Date;

  @Expose()
  @IsOptional()
  @IsNotEmpty()
  publishedDate: Date;

  @Expose()
  @IsOptional()
  @IsNotEmpty()
  jobVideoLink: string;

  @Expose()
  @IsOptional()
  @IsNotEmpty()
  jobAttachmentLink: string;

  // employment type (full time, part time, contract, internship, temporary)
  @Expose()
  @IsOptional()
  @IsNotEmpty()
  employmentType: number;

  @Expose()
  @IsOptional()
  @IsNotEmpty()
  company: number;

  // job tags (IT, Engineering, Management, etc)
  @Expose()
  @IsOptional()
  @IsNotEmpty()
  tags: number[];

  // job location (city, country)
  @Expose()
  @IsOptional()
  @IsNotEmpty()
  jobLocations: number[];

  // job industry (IT, Engineering, Management, etc)
  @Expose()
  @IsOptional()
  @IsNotEmpty()
  jobIndustry: number;

  // career level (entry level, mid level, senior level)
  @Expose()
  @IsOptional()
  @IsNotEmpty()
  jobLevel: number;
}
