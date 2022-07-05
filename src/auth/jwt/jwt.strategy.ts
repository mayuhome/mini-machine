import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersRepository } from 'src/users/users.repository';
import { jwtConstants } from '../constants';
import { JwtPayload } from './jwt-payload-interface';

/*
 * @Author: Ma Jade
 * @Date: 2022-05-28 22:26:13
 * @LastEditTime: 2022-07-05 15:33:05
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/auth/jwt/jwt.strategy.ts
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
  ) {
    super({
      secretOrKey: jwtConstants.secret, // 'topSecret1',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { username } = payload;
    const user = await this.usersRepository.findOne({ username });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
