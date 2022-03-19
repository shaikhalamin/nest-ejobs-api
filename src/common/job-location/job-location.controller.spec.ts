import { Test, TestingModule } from '@nestjs/testing';
import { JobLocationController } from './job-location.controller';
import { JobLocationService } from './job-location.service';

describe('JobLocationController', () => {
  let controller: JobLocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobLocationController],
      providers: [JobLocationService],
    }).compile();

    controller = module.get<JobLocationController>(JobLocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
