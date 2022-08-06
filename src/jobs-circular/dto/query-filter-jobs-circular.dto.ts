/* eslint-disable prettier/prettier */
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';

@Exclude()
export class Filters {
    @Expose()
    @IsOptional()
    @IsNotEmpty()
    @Transform(({ value }) => Number(value))
    jobLocation?: number;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    @Transform(({ value }) => Number(value))
    jobIndustry?: number;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    @Transform(({ value }) => Number(value))
    company?: number;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    @Transform(({ value }) => Number(value))
    employmentType?: number;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    @Transform(({ value }) => Number(value))
    jobLevel?: number;

}

export enum JobCircularOrder {
    ASC = 'ASC',
    DESC = 'DESC',
    ONE = 1,
    NEGONE = -1
}

@Exclude()
export class QueryFilterJobsCircularDto {
    @Expose()
    @IsOptional()
    @IsNotEmpty()
    @Transform(({ value }) => value == undefined || !value ? 1 : Number(value))
    page: number;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    @Transform(({ value }) => {
        if (value > 500) {
            return 500
        }
        return Number(value == undefined || !value ? 20 : value);
    })
    per_page: number;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    order: JobCircularOrder;

    @Type(() => Filters)
    @ValidateNested({ each: true })
    @Expose()
    @IsOptional()
    @IsNotEmpty()
    filters: Filters
}
