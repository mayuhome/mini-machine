/*
 * @Author: Ma Jade
 * @Date: 2022-03-02 11:10:55
 * @LastEditTime: 2022-03-03 15:16:55
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/auth/local.strategy.ts
 */

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { LoginDto } from 'src/models/auth.model';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authServ: AuthService) {

    super();
    console.log('local strategy');
  }

  async validate(user: LoginDto): Promise<any> {
    console.log('validate');
    const _user = await this.authServ.validateUser(user);
    if (!_user) {
      throw new UnauthorizedException();
    }
    console.log('user:', user);
    return _user;
  }
}
