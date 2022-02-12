import { Module } from '@nestjs/common';
import { JobsCircularService } from './jobs-circular.service';
import { JobsCircularController } from './jobs-circular.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsCircularRepository } from './jobs-circular.repository';

@Module({
  imports: [TypeOrmModule.forFeature([JobsCircularRepository])],
  controllers: [JobsCircularController],
  providers: [JobsCircularService],
})
export class JobsCircularModule {}
