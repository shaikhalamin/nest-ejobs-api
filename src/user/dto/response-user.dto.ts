import { IsNotEmpty } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserResponse {
  @Expose()
  @IsNotEmpty()
  first_name: string;

  @Expose()
  @IsNotEmpty()
  last_name: string;

  @Expose()
  @IsNotEmpty()
  username: string;

  @Expose()
  @IsNotEmpty()
  email: string;

  @Expose()
  @IsNotEmpty()
  role: string;
}
