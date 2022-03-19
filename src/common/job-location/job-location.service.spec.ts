import { Test, TestingModule } from '@nestjs/testing';
import { JobLocationService } from './job-location.service';

describe('JobLocationService', () => {
  let service: JobLocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobLocationService],
    }).compile();

    service = module.get<JobLocationService>(JobLocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
