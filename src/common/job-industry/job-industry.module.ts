import { Module } from '@nestjs/common';
import { JobIndustryService } from './job-industry.service';
import { JobIndustryController } from './job-industry.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobIndustryRepository } from './job-industry.repository';

@Module({
  imports: [TypeOrmModule.forFeature([JobIndustryRepository])],
  controllers: [JobIndustryController],
  providers: [JobIndustryService],
})
export class JobIndustryModule {}
