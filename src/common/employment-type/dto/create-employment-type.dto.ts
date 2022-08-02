/* eslint-disable prettier/prettier */
import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

@Exclude()
export class CreateEmploymentTypeDto {
    @Expose()
    @IsNotEmpty()
    title: string;

    @Expose()
    @IsNotEmpty()
    alias: string;
}
