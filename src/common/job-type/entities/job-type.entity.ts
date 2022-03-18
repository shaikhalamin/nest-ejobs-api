import { BaseEntity } from '@/common/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('job_types')
export class JobType extends BaseEntity {
  @Column({ nullable: false, length: 30 })
  text: string;

  @Column({ nullable: false, length: 30 })
  value: string;
}
