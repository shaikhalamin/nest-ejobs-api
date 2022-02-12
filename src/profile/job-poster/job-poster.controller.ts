import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobPosterService } from './job-poster.service';
import { CreateJobPosterDto } from './dto/create-job-poster.dto';
import { UpdateJobPosterDto } from './dto/update-job-poster.dto';

@Controller('job-poster')
export class JobPosterController {
  constructor(private readonly jobPosterService: JobPosterService) {}

  @Post()
  create(@Body() createJobPosterDto: CreateJobPosterDto) {
    return this.jobPosterService.create(createJobPosterDto);
  }

  @Get()
  findAll() {
    return this.jobPosterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobPosterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobPosterDto: UpdateJobPosterDto) {
    return this.jobPosterService.update(+id, updateJobPosterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobPosterService.remove(+id);
  }
}
