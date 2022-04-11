import { Module } from '@nestjs/common';
import { EmploymentTypeService } from './employment-type.service';
import { EmploymentTypeController } from './employment-type.controller';

@Module({
  controllers: [EmploymentTypeController],
  providers: [EmploymentTypeService]
})
export class EmploymentTypeModule {}
