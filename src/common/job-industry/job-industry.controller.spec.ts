import { Test, TestingModule } from '@nestjs/testing';
import { JobIndustryController } from './job-industry.controller';
import { JobIndustryService } from './job-industry.service';

describe('JobIndustryController', () => {
  let controller: JobIndustryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobIndustryController],
      providers: [JobIndustryService],
    }).compile();

    controller = module.get<JobIndustryController>(JobIndustryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
