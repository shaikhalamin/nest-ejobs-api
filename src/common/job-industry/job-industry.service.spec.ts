import { Test, TestingModule } from '@nestjs/testing';
import { JobIndustryService } from './job-industry.service';

describe('JobIndustryService', () => {
  let service: JobIndustryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobIndustryService],
    }).compile();

    service = module.get<JobIndustryService>(JobIndustryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
