import { User } from '../../../user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Experience } from './job-seeker.experience.entity';

@Entity('job_seeker_profiles')
export class JobSeekerProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  full_name: string;

  @Column({ nullable: true })
  cv_name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  postal_code: string;

  @Column({ nullable: true })
  date_of_birth: Date;

  @Column({ nullable: true })
  citizenship: string;

  @Column({ nullable: true })
  marital_status: string;

  @Column({ nullable: true })
  designation: string;

  @Column({ nullable: true })
  specialized_at: string;

  @Column({ nullable: true })
  picture_cover: string;

  @Column({ nullable: true })
  picture_about: string;

  @Column({ nullable: true })
  cv_file: string;

  @Column({ nullable: true })
  linkedin_profile_path: string;

  @Column({ nullable: true })
  github_profile_path: string;

  @Column({ nullable: true })
  twitter_profile_path: string;

  @Column({ type: 'text', nullable: true })
  about_info: string;

  @Column({ nullable: true })
  profile_title: string;

  @Column({ nullable: true })
  profile_meta: string;

  @Column({ type: 'text', nullable: true })
  profile_meta_descriptions: string;

  @Column({ nullable: true })
  smo_image: string;

  @OneToOne(() => User, (user) => user.jobSeekerProfile)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Experience, (experience) => experience.jobSeekerProfile)
  experiences: Experience[];
}
