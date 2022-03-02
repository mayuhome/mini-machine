/* eslint-disable prettier/prettier */
/*
 * @Author: Ma Jade
 * @Date: 2022-03-02 11:05:40
 * @LastEditTime: 2022-03-02 13:21:58
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/auth/auth.module.ts
 */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule, 
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    })
  ],
  providers: [AuthService, LocalStrategy],
  exports: [ AuthService ],
  controllers: [AuthController]
})
export class AuthModule {}
