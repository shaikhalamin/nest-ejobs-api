import { JobSeekerProfile } from 'src/profile/job-seeker/entities/job-seeker-profile.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
