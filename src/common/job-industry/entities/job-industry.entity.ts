import { BaseEntity } from '@/common/entity/base.entity';
import { JobCircular } from '@/jobs-circular/entities/job-circular.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity('job_industries')
export class JobIndustry extends BaseEntity {
  @Column({ nullable: false, length: 30 })
  title: string;

  @Column({ nullable: false, length: 30 })
  alias: string;

  @OneToOne(() => JobCircular, (jobCircular) => jobCircular.jobIndustry)
  jobCircular: JobCircular;
}
