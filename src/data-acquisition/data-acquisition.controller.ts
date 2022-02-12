import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DataAcquisitionService } from './data-acquisition.service';
import { CreateDataAcquisitionDto } from './dto/create-data-acquisition.dto';
import { UpdateDataAcquisitionDto } from './dto/update-data-acquisition.dto';

@Controller('data-acquisition')
export class DataAcquisitionController {
  constructor(
    private readonly dataAcquisitionService: DataAcquisitionService,
  ) {}

  @Post()
  create(@Body() createDataAcquisitionDto: CreateDataAcquisitionDto) {
    //return this.dataAcquisitionService.create(createDataAcquisitionDto);
  }

  @Get()
  findAll() {
    //return this.dataAcquisitionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //return this.dataAcquisitionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDataAcquisitionDto: UpdateDataAcquisitionDto,
  ) {
    //return this.dataAcquisitionService.update(+id, updateDataAcquisitionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    //return this.dataAcquisitionService.remove(+id);
  }
}
