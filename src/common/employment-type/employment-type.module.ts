import { Module } from '@nestjs/common';
import { EmploymentTypeService } from './employment-type.service';
import { EmploymentTypeController } from './employment-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmploymentTypeRepository } from './employment-type.respository';

@Module({
  imports: [TypeOrmModule.forFeature([EmploymentTypeRepository])],
  controllers: [EmploymentTypeController],
  providers: [EmploymentTypeService],
})
export class EmploymentTypeModule {}
