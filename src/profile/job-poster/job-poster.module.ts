import { Module } from '@nestjs/common';
import { JobPosterService } from './job-poster.service';
import { JobPosterController } from './job-poster.controller';

@Module({
  controllers: [JobPosterController],
  providers: [JobPosterService]
})
export class JobPosterModule {}
