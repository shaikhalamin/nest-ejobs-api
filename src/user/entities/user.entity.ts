import { Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from '@/common/entity/base.entity';
import { JobSeekerProfile } from '@/profile/job-seeker/entities/job-seeker-profile.entity';
import { JobCircular } from '@/jobs-circular/entities/job-circular.entity';
@Entity('users')
export class User extends BaseEntity {
  @Column({ nullable: false, length: 100 })
  first_name: string;

  @Column({ nullable: false, length: 100 })
  last_name: string;

  @Column({ nullable: false, length: 60 })
  username: string;

  @Column({ nullable: false, length: 100 })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ default: true })
  is_active: boolean;

  @Column({ default: false })
  is_verified: boolean;

  @Column({ nullable: false, length: 20 })
  role: string;

  @OneToOne(() => JobSeekerProfile, (jobSeekerProfile) => jobSeekerProfile.user)
  jobSeekerProfile: JobSeekerProfile;

  @OneToOne(() => JobCircular, (jobCircular) => jobCircular.createdBy)
  jobCircularCreatedBy: JobCircular;

  @OneToOne(() => JobCircular, (jobCircular) => jobCircular.updatedBy)
  jobCircularUpdatedBy: JobCircular;
}
