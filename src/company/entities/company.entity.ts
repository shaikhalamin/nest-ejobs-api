import { BaseEntity } from '@/common/entity/base.entity';
import { JobCircular } from '@/jobs-circular/entities/job-circular.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('companies')
export class Company extends BaseEntity {
  @Column({ nullable: false, length: 255 })
  companyName: string;

  @Column({ nullable: false, length: 255 })
  companyEmail: string;

  @Column({ nullable: true, length: 255 })
  companyLogo: string;

  @Column({ nullable: true, length: 30 })
  companyType: string;

  @Column({ nullable: false, length: 50 })
  companyMobile: string;

  @Column({ nullable: true, length: 50 })
  companyTelephone: string;

  @Column({ nullable: true, length: 50 })
  companyFax: string;

  @Column({ nullable: true, length: 255 })
  companyUrl: string;

  @Column({ nullable: true })
  noOfEmployees: number;

  @Column({ nullable: true, type: 'text' })
  companyMotivation: string;

  @Column({ nullable: false, type: 'text' })
  companyAddress: string;

  @Column({ nullable: true, length: 255 })
  companyCity: string;

  @Column({ nullable: true, length: 100 })
  companyCountry: string;

  @OneToMany(() => JobCircular, (jobCircular) => jobCircular.company)
  jobCircular: JobCircular;
}
