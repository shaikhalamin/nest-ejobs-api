import { BaseEntity } from '@/common/entity/base.entity';
import { JobCircularJobLocation } from '@/jobs-circular/entities/job-circular-job-location.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('job_locations')
export class JobLocation extends BaseEntity {
  @Column({ nullable: false, length: 30 })
  title: string;

  @Column({ nullable: false, length: 30 })
  alias: string;

  @OneToMany(
    () => JobCircularJobLocation,
    (jobCircularJobLocation) => jobCircularJobLocation.jobLocation,
  )
  jobCircularJobLocation: JobCircularJobLocation[];
}
