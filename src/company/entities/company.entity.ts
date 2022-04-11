import { BaseEntity } from '@/common/entity/base.entity';
import { JobCircular } from '@/jobs-circular/entities/job-circular.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity('companies')
export class Company extends BaseEntity {
  @Column({ nullable: false, length: 30 })
  company_name: string;

  @Column({ nullable: false, length: 30 })
  company_logo: string;

  @Column({ nullable: true, length: 30 })
  company_type: string;

  @Column({ nullable: true, length: 20 })
  company_mobile: string;

  @Column({ nullable: true, length: 20 })
  company_telephone: string;

  @Column({ nullable: true, length: 20 })
  company_fax: string;

  @Column({ nullable: true, length: 150 })
  company_url: string;

  @Column({ nullable: true })
  no_of_employees: number;

  @Column({ nullable: true, type: 'text' })
  company_motivation: string;

  @Column({ nullable: true, type: 'text' })
  company_address: string;

  @Column({ nullable: true, length: 50 })
  company_city: string;

  @Column({ nullable: true, length: 50 })
  company_country: string;

  @OneToOne(() => JobCircular, (jobCircular) => jobCircular.company)
  jobCircular: JobCircular;
}
