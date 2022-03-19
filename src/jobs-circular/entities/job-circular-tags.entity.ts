import { Tag } from '@/common/tags/entities/tag.entity';
import { CreateDateColumn, Entity, ManyToOne, UpdateDateColumn } from 'typeorm';
import { JobCircular } from './job-circular.entity';

@Entity()
export class JobCircularTag {
  @ManyToOne(() => JobCircular, (jobCircular) => jobCircular.jobCircularTags, {
    primary: true,
  })
  jobCircular: JobCircular;

  @ManyToOne(() => Tag, (tag) => tag.jobCircularTags, { primary: true })
  tag: Tag;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
