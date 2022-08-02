import { Module } from '@nestjs/common';
import { JobLevelService } from './job-level.service';
import { JobLevelController } from './job-level.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobLevelRepository } from './job-level.respository';

@Module({
  imports: [TypeOrmModule.forFeature([JobLevelRepository])],
  controllers: [JobLevelController],
  providers: [JobLevelService],
})
export class JobLevelModule {}
