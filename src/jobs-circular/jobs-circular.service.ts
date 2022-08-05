import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateJobsCircularDto } from './dto/create-jobs-circular.dto';
import { UpdateJobsCircularDto } from './dto/update-jobs-circular.dto';
import { JobsCircularRepository } from './jobs-circular.repository';

@Injectable()
export class JobsCircularService {
  constructor(private readonly jobCircularRepository: JobsCircularRepository) {}

  create(createJobsCircularDto: CreateJobsCircularDto) {
    return this.jobCircularRepository.addJobCircular(createJobsCircularDto);
  }

  async findAll(request: any) {
    try {
      const { page = 1, per_page = 10, filters = {}, order = 'ASC' } = request;
      const [results, total] = await this.jobCircularRepository.findAndCount({
        join: {
          alias: 'job_circulars',
          leftJoinAndSelect: {
            company: 'job_circulars.company',
            employmentType: 'job_circulars.employmentType',
            jobIndustry: 'job_circulars.jobIndustry',
            jobLevel: 'job_circulars.jobLevel',
          },
        },
        // where: (qb) => {
        //   if (query_string_and_object) {
        //     qb.where(
        //       query_string_and_object.filter_query,
        //       query_string_and_object.filter_query_object,
        //     ).andWhere('buildings.company_id = :company_id', {
        //       company_id: company_id,
        //     });
        //   } else {
        //     qb.where('buildings.company_id = :company_id', {
        //       company_id: company_id,
        //     });
        //   }
        // },
        take: Number(per_page),
        skip: (Number(page) - 1) * Number(per_page),
        order: {
          created_at: order,
        },
      });

      return {
        sucess: true,
        data: results,
        meta: {
          all_total: total,
          total: results.length,
          per_page: Number(per_page),
          page: Number(page),
        },
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  findOne(id: number) {
    return this.jobCircularRepository.findOne(id, {
      relations: ['company', 'employmentType', 'jobIndustry', 'jobLevel'],
    });
  }

  update(id: number, updateJobsCircularDto: UpdateJobsCircularDto) {
    return `This action updates a #${id} jobsCircular`;
  }

  remove(id: number) {
    return this.jobCircularRepository.delete(+id);
  }
}
