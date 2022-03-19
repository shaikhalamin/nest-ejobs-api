import { BaseEntity } from '@/common/entity/base.entity';
import { JobCircularTag } from '@/jobs-circular/entities/job-circular-tags.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('tags')
export class Tag extends BaseEntity {
  @Column({ nullable: false, length: 20 })
  name: string;

  @Column({ nullable: false, length: 20 })
  slug: string;

  @OneToMany(() => JobCircularTag, (jobCircularTag) => jobCircularTag.tag)
  jobCircularTags: JobCircularTag[];
}
