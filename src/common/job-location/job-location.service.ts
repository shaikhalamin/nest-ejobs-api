import { Injectable } from '@nestjs/common';
import { CreateJobLocationDto } from './dto/create-job-location.dto';
import { UpdateJobLocationDto } from './dto/update-job-location.dto';

@Injectable()
export class JobLocationService {
  create(createJobLocationDto: CreateJobLocationDto) {
    return 'This action adds a new jobLocation';
  }

  findAll() {
    return `This action returns all jobLocation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobLocation`;
  }

  update(id: number, updateJobLocationDto: UpdateJobLocationDto) {
    return `This action updates a #${id} jobLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobLocation`;
  }
}
