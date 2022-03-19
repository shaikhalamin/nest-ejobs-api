import { Injectable } from '@nestjs/common';
import { CreateJobIndustryDto } from './dto/create-job-industry.dto';
import { UpdateJobIndustryDto } from './dto/update-job-industry.dto';

@Injectable()
export class JobIndustryService {
  create(createJobIndustryDto: CreateJobIndustryDto) {
    return 'This action adds a new jobIndustry';
  }

  findAll() {
    return `This action returns all jobIndustry`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobIndustry`;
  }

  update(id: number, updateJobIndustryDto: UpdateJobIndustryDto) {
    return `This action updates a #${id} jobIndustry`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobIndustry`;
  }
}
