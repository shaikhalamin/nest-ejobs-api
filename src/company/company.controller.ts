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
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { extname } from 'path';
import { Express } from 'express';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseInterceptors(
    FileInterceptor('companyLogo', {
      storage: diskStorage({
        destination: './public/uploads/companies',
        filename: async (req: any, file: Express.Multer.File, cb: any) => {
          const companyEmail = new String(
            req.body.companyEmail,
          ).toLocaleLowerCase();
          cb(null, `${companyEmail}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  create(
    @Body() createCompanyDto: CreateCompanyDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.companyService.create(createCompanyDto, file.filename);
  }

  @Get()
  findAll() {
    return this.companyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(+id, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(+id);
  }
}
