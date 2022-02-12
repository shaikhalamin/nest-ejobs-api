import { EntityRepository, Repository } from 'typeorm';
import { JobCircular } from './entities/job-circular.entity';

@EntityRepository(JobCircular)
export class JobsCircularRepository extends Repository<JobCircular> {}
