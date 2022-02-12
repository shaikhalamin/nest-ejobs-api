import { Test, TestingModule } from '@nestjs/testing';
import { JobsCircularService } from './jobs-circular.service';

describe('JobsCircularService', () => {
  let service: JobsCircularService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobsCircularService],
    }).compile();

    service = module.get<JobsCircularService>(JobsCircularService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
