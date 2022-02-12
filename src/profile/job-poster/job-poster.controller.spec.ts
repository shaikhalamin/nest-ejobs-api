import { Test, TestingModule } from '@nestjs/testing';
import { JobPosterController } from './job-poster.controller';
import { JobPosterService } from './job-poster.service';

describe('JobPosterController', () => {
  let controller: JobPosterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobPosterController],
      providers: [JobPosterService],
    }).compile();

    controller = module.get<JobPosterController>(JobPosterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
