import { BaseEntity } from '@/common/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('job_levels')
export class JobLevel extends BaseEntity {
  @Column({ nullable: false, length: 30 })
  text: string;

  @Column({ nullable: false, length: 30 })
  value: string;
}
