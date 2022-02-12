import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('job_circulars')
export class JobCircular {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  job_title: string;

  @Column({ nullable: false })
  job_type: string; // should step a relation

  @Column({ nullable: false })
  job_category: string; // should step a relation

  @Column({ nullable: false })
  job_level: string; // should step a relation

  @Column({ nullable: false })
  no_of_positions: number;

  @Column({ nullable: false })
  salary: string;

  @Column({ nullable: false })
  education_qualification: string;

  @Column({ nullable: false })
  language_proficiency: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  country: string;

  @Column({ nullable: false })
  company: string; // should step a relation

  @Column({ nullable: false, type: 'boolean' })
  is_verified: number;

  @Column({ nullable: true })
  tags: string; // should step a relation

  @Column({ nullable: false, type: 'text' })
  ideal_candidate: string;

  @Column({ nullable: false, type: 'text' })
  job_description: string;

  @Column({ nullable: false, type: 'text' })
  job_benefits: string;

  @Column({ nullable: false })
  created_by: string; // should step a relation

  @Column({ nullable: false })
  updated_by: string; // should step a relation

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
