/*
 * @Author: Ma Jade
 * @Date: 2022-03-02 11:10:55
 * @LastEditTime: 2022-03-02 17:22:30
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/auth/local.strategy.ts
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
  }

  async validate(user: LoginDto): Promise<any> {
    const _user = await this.authServ.validateUser(user);
    if (!_user) {
      throw new UnauthorizedException();
    }
    console.log('user:', user);
    
    return _user;
  }
}
