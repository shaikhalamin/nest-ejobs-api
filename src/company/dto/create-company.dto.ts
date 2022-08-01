/* eslint-disable prettier/prettier */
import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';

@Exclude()
export class CreateCompanyDto {
    @Expose()
    @IsNotEmpty()
    companyName: string;

    @Expose()
    @IsNotEmpty()
    companyEmail: string;

    @Expose()
    @IsNotEmpty()
    companyAddress: string;

    @Expose()
    @IsNotEmpty()
    companyMobile: string;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    companyLogo: string;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    companyType: string;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    companyTelephone: string;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    companyFax: string;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    companyUrl: string;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    noOfEmployees: number;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    companyMotivation: string;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    companyCity: string;

    @Expose()
    @IsOptional()
    @IsNotEmpty()
    companyCountry: string;
}
