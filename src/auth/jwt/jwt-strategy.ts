import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersRepository } from 'src/users/users.repository';
import { JwtPayload } from './jwt-payload-interface';

/*
 * @Author: Ma Jade
 * @Date: 2022-05-28 22:26:13
 * @LastEditTime: 2022-05-28 23:27:35
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/auth/jwt/jwt-strategy.ts
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
  ) {
    super({
      secretOrKey: 'topSecret1',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { Username } = payload;
    const user = await this.usersRepository.findOne({ Username });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
