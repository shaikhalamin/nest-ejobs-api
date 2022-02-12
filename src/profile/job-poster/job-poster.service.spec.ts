import { Test, TestingModule } from '@nestjs/testing';
import { JobPosterService } from './job-poster.service';

describe('JobPosterService', () => {
  let service: JobPosterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobPosterService],
    }).compile();

    service = module.get<JobPosterService>(JobPosterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
