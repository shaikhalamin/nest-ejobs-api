import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobLocationService } from './job-location.service';
import { CreateJobLocationDto } from './dto/create-job-location.dto';
import { UpdateJobLocationDto } from './dto/update-job-location.dto';

@Controller('job-location')
export class JobLocationController {
  constructor(private readonly jobLocationService: JobLocationService) {}

  @Post()
  create(@Body() createJobLocationDto: CreateJobLocationDto) {
    return this.jobLocationService.create(createJobLocationDto);
  }

  @Get()
  findAll() {
    return this.jobLocationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobLocationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobLocationDto: UpdateJobLocationDto) {
    return this.jobLocationService.update(+id, updateJobLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobLocationService.remove(+id);
  }
}
