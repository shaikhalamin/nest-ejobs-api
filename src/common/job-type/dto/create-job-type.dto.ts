import { IsNotEmpty } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateJobTypeDto {
  @Expose()
  @IsNotEmpty()
  title: string;

  @Expose()
  @IsNotEmpty()
  alias: string;
}
