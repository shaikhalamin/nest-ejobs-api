import { Module } from '@nestjs/common';
import { JobIndustryService } from './job-industry.service';
import { JobIndustryController } from './job-industry.controller';

@Module({
  controllers: [JobIndustryController],
  providers: [JobIndustryService]
})
export class JobIndustryModule {}
