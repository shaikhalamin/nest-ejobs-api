import { Module } from '@nestjs/common';
import { JobLocationService } from './job-location.service';
import { JobLocationController } from './job-location.controller';

@Module({
  controllers: [JobLocationController],
  providers: [JobLocationService],
})
export class JobLocationModule {}
