import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 30 })
  company_name: string;

  @Column({ nullable: false, length: 30 })
  company_logo: string;

  @Column({ nullable: false, length: 30 })
  company_type: string; //should setup relation with job-category

  @Column({ nullable: false, length: 20 })
  company_mobile: string;

  @Column({ nullable: false, length: 20 })
  company_telephone: string;

  @Column({ nullable: false, length: 20 })
  company_fax: string;

  @Column({ nullable: false, length: 150 })
  company_url: string;

  @Column({ nullable: false })
  no_of_employees: number;

  @Column({ nullable: false, type: 'text' })
  company_motivation: string;

  @Column({ nullable: false, type: 'text' })
  company_address: string;

  @Column({ nullable: false, length: 50 })
  company_city: string;

  @Column({ nullable: false, length: 50 })
  company_country: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
