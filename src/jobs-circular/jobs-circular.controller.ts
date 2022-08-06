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
  Query,
} from '@nestjs/common';
import { JobsCircularService } from './jobs-circular.service';
import { CreateJobsCircularDto } from './dto/create-jobs-circular.dto';
import { UpdateJobsCircularDto } from './dto/update-jobs-circular.dto';
import { QueryFilterJobsCircularDto } from './dto/query-filter-jobs-circular.dto';

@Controller('jobs-circulars')
export class JobsCircularController {
  constructor(private readonly jobsCircularService: JobsCircularService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createJobsCircularDto: CreateJobsCircularDto) {
    return this.jobsCircularService.create(createJobsCircularDto);
  }

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  findAll(@Query() request: QueryFilterJobsCircularDto) {
    //console.log(request);
    return this.jobsCircularService.findAll(request);
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
