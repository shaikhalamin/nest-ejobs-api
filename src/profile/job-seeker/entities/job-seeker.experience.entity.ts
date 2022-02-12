import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { JobSeekerProfile } from './job-seeker-profile.entity';

@Entity('experiences')
export class Experience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  company_name: string;

  //   @Column({ nullable: true })
  //   company_email: string;

  //   @Column({ nullable: true })
  //   company_phone: string;

  @Column({ nullable: true })
  company_location: string; //city

  @Column({ nullable: true })
  company_city: string;

  @Column({ nullable: true })
  company_country: string;

  @Column({ nullable: true })
  company_website: string;

  @Column({ nullable: true })
  project_website: string;

  @Column({ nullable: true })
  designation: string;

  @Column({ nullable: true })
  job_type: string;

  @Column({ nullable: true, type: 'date' })
  start_date: Date;

  @Column({ nullable: true, type: 'date' })
  end_date: Date;

  @Column({ nullable: true, type: 'text' })
  job_responsibility: string;

  @Column({ nullable: true })
  work_stack: string; // need add tags

  @Index('experience_job_seeker_profileId_index')
  @ManyToOne(
    () => JobSeekerProfile,
    (jobSeekerProfile) => jobSeekerProfile.experiences,
  )
  @JoinColumn({ name: 'job_seeker_profile_id' })
  jobSeekerProfile: JobSeekerProfile;
}
