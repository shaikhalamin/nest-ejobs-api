/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CompanyRepository } from './company.repository';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(private readonly companyRepository: CompanyRepository) { }
  create(createCompanyDto: CreateCompanyDto, companyLogo: string) {
    return this.companyRepository.addCompany(createCompanyDto, companyLogo);
  }

  findAll() {
    return this.companyRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
