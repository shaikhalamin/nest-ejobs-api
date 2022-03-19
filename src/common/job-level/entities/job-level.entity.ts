import { BaseEntity } from '@/common/entity/base.entity';
import { JobCircular } from '@/jobs-circular/entities/job-circular.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity('job_levels')
export class JobLevel extends BaseEntity {
  @Column({ nullable: false, length: 30 })
  title: string;

  @Column({ nullable: false, length: 30 })
  alias: string;

  @OneToOne(() => JobCircular, (jobCircular) => jobCircular.jobLevel)
  jobCircular: JobCircular;
}
