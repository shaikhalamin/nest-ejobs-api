import { Test, TestingModule } from '@nestjs/testing';
import { JobsCircularController } from './jobs-circular.controller';
import { JobsCircularService } from './jobs-circular.service';

describe('JobsCircularController', () => {
  let controller: JobsCircularController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobsCircularController],
      providers: [JobsCircularService],
    }).compile();

    controller = module.get<JobsCircularController>(JobsCircularController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
