import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { User } from '@/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginRequest: LoginDto): Promise<{ access_token: string }> {
    //const payload = { username: user.username, sub: user.userId };
    const user = await this.validateUser(
      loginRequest.username,
      loginRequest.password,
    );
    const payload = {
      userId: user.id,
    };
    return {
      access_token: await this.jwtService.sign(payload, {
        secret: 'accesstokensecret',
        expiresIn: '5m',
      }),
    };
  }

  async findById(id: number): Promise<User> {
    const user = await this.userService.findOne(id);
    delete user.password;
    return user;
  }

  private async validateUser(
    username: string,
    password: string,
  ): Promise<User> {
    const user = await this.userService.findByUserName(username);

    if (!(await user?.validatePassword(password))) {
      throw new UnauthorizedException('Invalid username or password !');
    }
    delete user.password;
    return user;
  }
}
