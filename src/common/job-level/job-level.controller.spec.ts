import { Test, TestingModule } from '@nestjs/testing';
import { JobLevelController } from './job-level.controller';
import { JobLevelService } from './job-level.service';

describe('JobLevelController', () => {
  let controller: JobLevelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobLevelController],
      providers: [JobLevelService],
    }).compile();

    controller = module.get<JobLevelController>(JobLevelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
