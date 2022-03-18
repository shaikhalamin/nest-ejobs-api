import { BaseEntity } from '@/common/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('tags')
export class Tag extends BaseEntity {
  @Column({ nullable: false, length: 20 })
  name: string;

  @Column({ nullable: false, length: 20 })
  slug: string;
}
