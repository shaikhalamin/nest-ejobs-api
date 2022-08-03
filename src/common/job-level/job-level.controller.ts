import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JobLevelService } from './job-level.service';
import { CreateJobLevelDto } from './dto/create-job-level.dto';
import { UpdateJobLevelDto } from './dto/update-job-level.dto';

@Controller('job-levels')
export class JobLevelController {
  constructor(private readonly jobLevelService: JobLevelService) {}

  @Post()
  create(@Body() createJobLevelDto: CreateJobLevelDto) {
    return this.jobLevelService.create(createJobLevelDto);
  }

  @Get()
  findAll() {
    return this.jobLevelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobLevelService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateJobLevelDto: UpdateJobLevelDto,
  ) {
    return this.jobLevelService.update(+id, updateJobLevelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobLevelService.remove(+id);
  }
}
