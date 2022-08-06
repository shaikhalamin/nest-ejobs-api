import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateJobsCircularDto } from './dto/create-jobs-circular.dto';
import {
  Filters,
  JobCircularOrder,
  QueryFilterJobsCircularDto,
} from './dto/query-filter-jobs-circular.dto';
import { UpdateJobsCircularDto } from './dto/update-jobs-circular.dto';
import { JobsCircularRepository } from './jobs-circular.repository';

@Injectable()
export class JobsCircularService {
  constructor(private readonly jobCircularRepository: JobsCircularRepository) {}

  create(createJobsCircularDto: CreateJobsCircularDto) {
    return this.jobCircularRepository.addJobCircular(createJobsCircularDto);
  }

  async findAll(request: QueryFilterJobsCircularDto) {
    try {
      const {
        page = 1,
        per_page = 20,
        order = JobCircularOrder.DESC,
        filters = {},
      } = request;

      const queryGenerator = this.createFiltersQueryString(filters);
      const [results, total] = await this.jobCircularRepository.findAndCount({
        join: {
          alias: 'jobCirculars',
          leftJoinAndSelect: {
            company: 'jobCirculars.company',
            employmentType: 'jobCirculars.employmentType',
            jobIndustry: 'jobCirculars.jobIndustry',
            jobLevel: 'jobCirculars.jobLevel',
          },
        },
        where: (qb) => {
          if (queryGenerator.is_valid) {
            qb.where(
              queryGenerator.filter_query,
              queryGenerator.filter_query_object,
            );
          }
        },
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

  createFiltersQueryString(filters: Filters) {
    let filter_query = '';
    const filter_query_object = {};
    const newFilters = this.removeFalsy(filters);

    if (!Object.keys(newFilters).length) {
      return {
        is_valid: false,
        filter_query,
        filter_query_object,
      };
    }

    Object.keys(newFilters).forEach(function (key) {
      const mapToCoulumn = key
        .replace(/\W+/g, ' ')
        .split(/ |\B(?=[A-Z])/)
        .map((queryName: string) => queryName.toLowerCase())
        .join('_');
      filter_query += `${mapToCoulumn}_id = :${key} and `;
      filter_query_object[key] = Number(newFilters[key]);
    });

    return {
      is_valid: true,
      filter_query: filter_query.slice(0, filter_query.length - 5),
      filter_query_object,
    };
  }

  removeFalsy(filters: Filters) {
    return Object.entries(filters).reduce(
      (a, [k, v]) => (v ? ((a[k] = v), a) : a),
      {} as Filters,
    );
  }
}
