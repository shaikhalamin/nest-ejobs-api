import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EmploymentTypeService } from './employment-type.service';
import { CreateEmploymentTypeDto } from './dto/create-employment-type.dto';
import { UpdateEmploymentTypeDto } from './dto/update-employment-type.dto';

@Controller('employment-types')
export class EmploymentTypeController {
  constructor(private readonly employmentTypeService: EmploymentTypeService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createEmploymentTypeDto: CreateEmploymentTypeDto) {
    return this.employmentTypeService.create(createEmploymentTypeDto);
  }

  @Get()
  findAll() {
    return this.employmentTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employmentTypeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmploymentTypeDto: UpdateEmploymentTypeDto,
  ) {
    return this.employmentTypeService.update(+id, updateEmploymentTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employmentTypeService.remove(+id);
  }
}
