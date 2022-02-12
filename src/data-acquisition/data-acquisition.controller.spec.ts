import { Test, TestingModule } from '@nestjs/testing';
import { DataAcquisitionController } from './data-acquisition.controller';
import { DataAcquisitionService } from './data-acquisition.service';

describe('DataAcquisitionController', () => {
  let controller: DataAcquisitionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataAcquisitionController],
      providers: [DataAcquisitionService],
    }).compile();

    controller = module.get<DataAcquisitionController>(DataAcquisitionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
