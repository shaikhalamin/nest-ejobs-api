import { BaseEntity } from '@/common/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('cities')
export class City extends BaseEntity {
  @Column({ nullable: false, length: 30 })
  name: string;

  @Column({ nullable: false, length: 30 })
  value: string;
}
