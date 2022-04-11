import { EmploymentType } from '@/common/employment-type/entities/employment-type.entity';
import { BaseEntity } from '@/common/entity/base.entity';
import { JobIndustry } from '@/common/job-industry/entities/job-industry.entity';
import { JobLevel } from '@/common/job-level/entities/job-level.entity';
import { Company } from '@/company/entities/company.entity';
import { User } from '@/user/entities/user.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { JobCircularJobLocation } from './job-circular-job-location.entity';
import { JobCircularTag } from './job-circular-tags.entity';

@Entity('job_circulars')
export class JobCircular extends BaseEntity {
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  no_of_positions: number;

  @Column({ nullable: false })
  salary: string;

  @Column({ nullable: false })
  language_proficiency: string;

  @Column({ nullable: false })
  country: string;

  @Column({ nullable: false })
  age: string;

  @Column({ nullable: false, type: 'boolean', default: false })
  is_verified: number;

  @Column({ nullable: false, type: 'boolean', default: false })
  is_published: number;

  @Column({ nullable: false, type: 'boolean', default: false })
  is_featured: number;

  // status (open, closed, expired)
  @Column({ nullable: false })
  status: string;

  @Column({ nullable: false, type: 'text' })
  job_Responsibilities: string;

  @OneToOne(
    () => EmploymentType,
    (employmentType) => employmentType.jobCircular,
  )
  @JoinColumn()
  employmentType: EmploymentType;

  @Column({ nullable: false })
  education_requirements: string;

  @Column({ nullable: true, type: 'text' })
  experience_requirements: string;

  @Column({ nullable: true, type: 'text' })
  additional_requirements: string;

  @Column({ nullable: true, type: 'text' })
  compensations_job_benefits: string;

  @Column({ nullable: true, type: 'date' })
  application_deadline: Date;

  @Column({ nullable: true, type: 'datetime' })
  published_date: Date;

  @Column({ nullable: true, type: 'varchar' })
  job_video_link: string;

  @OneToOne(() => Company, (company) => company.jobCircular)
  @JoinColumn()
  company: Company;

  // job tags (IT, Engineering, Management, etc)
  @OneToMany(
    () => JobCircularTag,
    (jobCircularTag) => jobCircularTag.jobCircular,
  )
  jobCircularTags: JobCircularTag[];

  // job location (city, country)
  @OneToMany(
    () => JobCircularJobLocation,
    (jobCircularJobLocation) => jobCircularJobLocation.jobCircular,
  )
  jobCircularJobLocations: JobCircularJobLocation[];

  // job industry (IT, Engineering, Management, etc)
  @OneToOne(() => JobIndustry, (jobIndustry) => jobIndustry.jobCircular)
  @JoinColumn()
  jobIndustry: JobIndustry;

  // career level (entry level, mid level, senior level)
  @OneToOne(() => JobLevel, (jobLevel) => jobLevel.jobCircular)
  @JoinColumn()
  jobLevel: JobLevel;

  @OneToOne(() => User, (user) => user.jobCircularCreatedBy)
  @JoinColumn()
  createdBy: User;

  @OneToOne(() => User, (user) => user.jobCircularUpdatedBy)
  @JoinColumn()
  updatedBy: User;
}
