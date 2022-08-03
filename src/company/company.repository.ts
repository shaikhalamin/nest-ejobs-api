/* eslint-disable prettier/prettier */
import { BadRequestException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './entities/company.entity';

@EntityRepository(Company)
export class CompanyRepository extends Repository<Company> {
    async addCompany(jobsCircularDto: CreateCompanyDto, companyLogo: string) {
        try {
            const company = Object.assign(new Company(), jobsCircularDto);
            company.companyLogo = companyLogo;
            return await this.save(company);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}