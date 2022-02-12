import { Test, TestingModule } from '@nestjs/testing';
import { JobLevelService } from './job-level.service';

describe('JobLevelService', () => {
  let service: JobLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobLevelService],
    }).compile();

    service = module.get<JobLevelService>(JobLevelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
