import { BeforeInsert, Column, Entity, Index, OneToOne } from 'typeorm';
import { BaseEntity } from '@/common/entity/base.entity';
import { JobSeekerProfile } from '@/profile/job-seeker/entities/job-seeker-profile.entity';
import { JobCircular } from '@/jobs-circular/entities/job-circular.entity';
import * as bcrypt from 'bcrypt';
@Entity('users')
export class User extends BaseEntity {
  @Column({ nullable: false, length: 100 })
  first_name: string;

  @Column({ nullable: false, length: 100 })
  last_name: string;

  @Column({ nullable: false, length: 60 })
  @Index('usersUniqueName', { unique: true })
  username: string;

  @Column({ nullable: false, length: 100 })
  @Index('usersUniqueEmail', { unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ default: true })
  is_active: boolean;

  @Column({ default: false })
  is_verified: boolean;

  @Column({ nullable: false, length: 20 })
  role: string;

  @OneToOne(() => JobSeekerProfile, (jobSeekerProfile) => jobSeekerProfile.user)
  jobSeekerProfile: JobSeekerProfile;

  @OneToOne(() => JobCircular, (jobCircular) => jobCircular.createdBy)
  jobCircularCreatedBy: JobCircular;

  @OneToOne(() => JobCircular, (jobCircular) => jobCircular.updatedBy)
  jobCircularUpdatedBy: JobCircular;

  @BeforeInsert()
  async hashPassword() {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }

  async validatePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }
}
