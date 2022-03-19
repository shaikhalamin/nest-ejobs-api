import { IsNotEmpty } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateJobIndustryDto {
  @Expose()
  @IsNotEmpty()
  title: string;

  @Expose()
  @IsNotEmpty()
  alias: string;
}
