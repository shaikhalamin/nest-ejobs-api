import { BaseEntity } from '@/common/entity/base.entity';
import { JobCircular } from '@/jobs-circular/entities/job-circular.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('job_locations')
export class JobLocation extends BaseEntity {
  @Column({ nullable: false, length: 30 })
  title: string;

  @Column({ nullable: false, length: 30 })
  alias: string;

  @ManyToOne(() => JobCircular, (jobCircular) => jobCircular.jobLocations)
  jobCircular: JobCircular;
}
