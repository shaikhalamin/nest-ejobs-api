import { BaseEntity } from '@/common/entity/base.entity';
import { JobCircular } from '@/jobs-circular/entities/job-circular.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity('job_types')
export class JobType extends BaseEntity {
  @Column({ nullable: false, length: 30 })
  title: string;

  @Column({ nullable: false, length: 30 })
  alias: string;

  @OneToOne(() => JobCircular, (jobCircular) => jobCircular.jobType)
  jobCircular: JobCircular;
}
