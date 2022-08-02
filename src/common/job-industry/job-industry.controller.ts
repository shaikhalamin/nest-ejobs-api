import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JobIndustryService } from './job-industry.service';
import { CreateJobIndustryDto } from './dto/create-job-industry.dto';
import { UpdateJobIndustryDto } from './dto/update-job-industry.dto';

@Controller('job-industries')
export class JobIndustryController {
  constructor(private readonly jobIndustryService: JobIndustryService) {}

  @Post()
  create(@Body() createJobIndustryDto: CreateJobIndustryDto) {
    return this.jobIndustryService.create(createJobIndustryDto);
  }

  @Get()
  findAll() {
    return this.jobIndustryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobIndustryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateJobIndustryDto: UpdateJobIndustryDto,
  ) {
    return this.jobIndustryService.update(+id, updateJobIndustryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobIndustryService.remove(+id);
  }
}
