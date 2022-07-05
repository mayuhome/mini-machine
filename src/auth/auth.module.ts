/* eslint-disable prettier/prettier */
/*
 * @Author: Ma Jade
 * @Date: 2022-03-02 11:05:40
 * @LastEditTime: 2022-07-05 15:35:33
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/auth/auth.module.ts
 */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt/jwt.strategy';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from 'src/users/users.repository';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([UsersRepository]),
    PassportModule.register({ defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60h' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [ JwtStrategy, PassportModule ],
  controllers: [AuthController]
})
export class AuthModule {}
