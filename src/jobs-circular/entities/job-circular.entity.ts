import { BaseEntity } from '@/common/entity/base.entity';
import { JobIndustry } from '@/common/job-industry/entities/job-industry.entity';
import { JobLevel } from '@/common/job-level/entities/job-level.entity';
import { JobLocation } from '@/common/job-location/entities/job-location.entity';
import { JobType } from '@/common/job-type/entities/job-type.entity';
import { User } from '@/user/entities/user.entity';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';

@Entity('job_circulars')
export class JobCircular extends BaseEntity {
  @Column({ nullable: false })
  title: string;

  @OneToOne(() => JobType, (jobType) => jobType.jobCircular)
  jobType: JobType;

  @OneToOne(() => JobIndustry, (jobIndustry) => jobIndustry.jobCircular)
  jobIndustry: JobIndustry;

  @OneToOne(() => JobLevel, (jobLevel) => jobLevel.jobCircular)
  jobLevel: JobLevel;

  @Column({ nullable: false })
  no_of_positions: number;

  @Column({ nullable: false })
  salary: string;

  @Column({ nullable: false })
  education_qualification: string;

  @Column({ nullable: false })
  language_proficiency: string;

  @OneToMany(() => JobLocation, (jobLocation) => jobLocation.jobCircular)
  jobLocations: JobLocation[];

  @Column({ nullable: false })
  country: string;

  @Column({ nullable: false })
  company: string; // should step a relation

  @Column({ nullable: false, type: 'boolean' })
  is_verified: number;

  @Column({ nullable: true })
  tags: string; // should step a relation

  @Column({ nullable: false, type: 'text' })
  ideal_candidate: string;

  @Column({ nullable: false, type: 'text' })
  job_description: string;

  @Column({ nullable: false, type: 'text' })
  job_benefits: string;

  @OneToOne(() => User, (user) => user.jobCircularCreatedBy)
  createdBy: User;

  @OneToOne(() => User, (user) => user.jobCircularUpdatedBy)
  UpdatedBy: User;
}
