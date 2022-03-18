import { BaseEntity } from '@/common/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('job_categories')
export class JobCategory extends BaseEntity {
  @Column({ nullable: false, length: 30 })
  name: string;
}
