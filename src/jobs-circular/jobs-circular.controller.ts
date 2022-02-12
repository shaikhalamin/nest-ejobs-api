import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JobsCircularService } from './jobs-circular.service';
import { CreateJobsCircularDto } from './dto/create-jobs-circular.dto';
import { UpdateJobsCircularDto } from './dto/update-jobs-circular.dto';

@Controller('jobs-circular')
export class JobsCircularController {
  constructor(private readonly jobsCircularService: JobsCircularService) {}

  @Post()
  create(@Body() createJobsCircularDto: CreateJobsCircularDto) {
    return this.jobsCircularService.create(createJobsCircularDto);
  }

  @Get()
  findAll() {
    return this.jobsCircularService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobsCircularService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateJobsCircularDto: UpdateJobsCircularDto,
  ) {
    return this.jobsCircularService.update(+id, updateJobsCircularDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobsCircularService.remove(+id);
  }
}
