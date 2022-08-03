import { BaseEntity } from '@/common/entity/base.entity';
import { JobCircular } from '@/jobs-circular/entities/job-circular.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('companies')
export class Company extends BaseEntity {
  @Column({ nullable: false, length: 30 })
  companyName: string;

  @Column({ nullable: false, length: 30 })
  companyEmail: string;

  @Column({ nullable: true, length: 255 })
  companyLogo: string;

  @Column({ nullable: true, length: 30 })
  companyType: string;

  @Column({ nullable: false, length: 20 })
  companyMobile: string;

  @Column({ nullable: true, length: 20 })
  companyTelephone: string;

  @Column({ nullable: true, length: 20 })
  companyFax: string;

  @Column({ nullable: true, length: 150 })
  companyUrl: string;

  @Column({ nullable: true })
  noOfEmployees: number;

  @Column({ nullable: true, type: 'text' })
  companyMotivation: string;

  @Column({ nullable: false, type: 'text' })
  companyAddress: string;

  @Column({ nullable: true, length: 50 })
  companyCity: string;

  @Column({ nullable: true, length: 50 })
  companyCountry: string;

  @OneToMany(() => JobCircular, (jobCircular) => jobCircular.company)
  jobCircular: JobCircular;
}
