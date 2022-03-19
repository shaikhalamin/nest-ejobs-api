import { JobLocation } from '@/common/job-location/entities/job-location.entity';
import { CreateDateColumn, Entity, ManyToOne, UpdateDateColumn } from 'typeorm';
import { JobCircular } from './job-circular.entity';

@Entity()
export class JobCircularJobLocation {
  @ManyToOne(
    () => JobCircular,
    (jobCircular) => jobCircular.jobCircularJobLocations,
    { primary: true },
  )
  jobCircular: JobCircular;

  @ManyToOne(
    () => JobLocation,
    (jobLocation) => jobLocation.jobCircularJobLocation,
    { primary: true },
  )
  jobLocation: JobLocation;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
