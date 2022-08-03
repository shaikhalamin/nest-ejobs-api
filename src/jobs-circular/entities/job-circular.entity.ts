import { EmploymentType } from '@/common/employment-type/entities/employment-type.entity';
import { BaseEntity } from '@/common/entity/base.entity';
import { JobIndustry } from '@/common/job-industry/entities/job-industry.entity';
import { JobLevel } from '@/common/job-level/entities/job-level.entity';
import { Company } from '@/company/entities/company.entity';
import { User } from '@/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { JobCircularJobLocation } from './job-circular-job-location.entity';
import { JobCircularTag } from './job-circular-tags.entity';

@Entity('job_circulars')
export class JobCircular extends BaseEntity {
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: true })
  noOfPositions: number;

  @Column({ nullable: true })
  salary: string;

  @Column({ nullable: true })
  languageProficiency: string;

  @Column({ nullable: false })
  country: string;

  @Column({ nullable: true, default: 'N/A' })
  age: string;

  @Column({ nullable: true, type: 'boolean', default: false })
  isVerified: boolean;

  @Column({ nullable: true, type: 'boolean', default: false })
  isPublished: boolean;

  @Column({ nullable: true, type: 'boolean', default: false })
  isFeatured: boolean;

  // status (draft, active, closed, expired)
  @Column({ nullable: false })
  status: string;

  @Column({ nullable: true, type: 'text' })
  jobResponsibilities: string;

  @Column({ nullable: true, type: 'text' })
  educationRequirements: string;

  @Column({ nullable: true, type: 'text' })
  experienceRequirements: string;

  @Column({ nullable: true, type: 'text' })
  additionalRequirements: string;

  @Column({ nullable: true, type: 'text' })
  compensationsJobBenefits: string;

  @Column({ nullable: true, type: 'date' })
  applicationDeadline: Date;

  @Column({ nullable: true, type: 'datetime' })
  publishedDate: Date;

  @Column({ nullable: true, type: 'varchar' })
  jobVideoLink: string;

  @Column({ nullable: true, type: 'varchar' })
  jobAttachmentLink: string;

  // employment type (full time, part time, contract, internship, temporary)
  @ManyToOne(
    () => EmploymentType,
    (employmentType) => employmentType.jobCircular,
  )
  @JoinColumn()
  employmentType: EmploymentType;

  @ManyToOne(() => Company, (company) => company.jobCircular)
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
  @ManyToOne(() => JobIndustry, (jobIndustry) => jobIndustry.jobCircular)
  @JoinColumn()
  jobIndustry: JobIndustry;

  // career level (entry level, mid level, senior level)
  @ManyToOne(() => JobLevel, (jobLevel) => jobLevel.jobCircular)
  @JoinColumn()
  jobLevel: JobLevel;

  @ManyToOne(() => User, (user) => user.jobCircularCreatedBy)
  @JoinColumn()
  createdBy: User;

  @ManyToOne(() => User, (user) => user.jobCircularUpdatedBy)
  @JoinColumn()
  updatedBy: User;
}
