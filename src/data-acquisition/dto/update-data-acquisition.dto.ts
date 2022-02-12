import { PartialType } from '@nestjs/mapped-types';
import { CreateDataAcquisitionDto } from './create-data-acquisition.dto';

export class UpdateDataAcquisitionDto extends PartialType(CreateDataAcquisitionDto) {}
