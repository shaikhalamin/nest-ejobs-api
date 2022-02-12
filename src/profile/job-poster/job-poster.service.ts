import { Injectable } from '@nestjs/common';
import { CreateJobPosterDto } from './dto/create-job-poster.dto';
import { UpdateJobPosterDto } from './dto/update-job-poster.dto';

@Injectable()
export class JobPosterService {
  create(createJobPosterDto: CreateJobPosterDto) {
    return 'This action adds a new jobPoster';
  }

  findAll() {
    return `This action returns all jobPoster`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobPoster`;
  }

  update(id: number, updateJobPosterDto: UpdateJobPosterDto) {
    return `This action updates a #${id} jobPoster`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobPoster`;
  }
}
