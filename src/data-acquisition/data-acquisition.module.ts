import { Module } from '@nestjs/common';
import { DataAcquisitionService } from './data-acquisition.service';
import { DataAcquisitionController } from './data-acquisition.controller';
import { PuppeteerModule } from 'src/common/crawler/puppeteer/puppeteer.module';

@Module({
  imports: [PuppeteerModule],
  controllers: [DataAcquisitionController],
  providers: [DataAcquisitionService],
})
export class DataAcquisitionModule {}
