/* eslint-disable prettier/prettier */
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';

class Filters {
    @Expose()
    @IsOptional()
    @IsNotEmpty()
    jobLocation?: number;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    jobIndustry?: number;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    company?: number;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    employmentType?: number;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    jobLevel?: number;

}

@Exclude()
export class QueryFilterJobsCircularDto {
    @Expose()
    @IsOptional()
    @IsNotEmpty()
    @Transform(({ value }) => Number(value))
    page?: number;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    @Transform(({ value }) => Number(value))
    per_page?: number;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    @Transform(({ value }) => value == undefined ? 'DESC' : value)
    order?: string;

    @Type(() => Filters)
    @Expose()
    @IsOptional()
    @IsNotEmpty()
    filters: Filters
}
