import { BaseEntity } from '@/common/entity/base.entity';
import { JobCircular } from '@/jobs-circular/entities/job-circular.entity';
import { Column, Entity, OneToMany } from 'typeorm';

// employment type (full time, part time, contract, internship, temporary)
@Entity('employment_types')
export class EmploymentType extends BaseEntity {
  @Column({ nullable: false, length: 30 })
  title: string;

  @Column({ nullable: false, length: 30 })
  alias: string;

  @OneToMany(() => JobCircular, (jobCircular) => jobCircular.employmentType)
  jobCircular: JobCircular;
}
