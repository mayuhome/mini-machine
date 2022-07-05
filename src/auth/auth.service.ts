/* eslint-disable prettier/prettier */
/*
 * @Author: Ma Jade
 * @Date: 2022-03-02 11:05:47
 * @LastEditTime: 2022-05-28 23:55:53
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/auth/auth.service.ts
 */
import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from 'src/users/users.repository';
import { SignInDto, SignUpDto } from './auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './jwt/jwt-payload-interface';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
    private readonly jwtServ: JwtService,
  ) {}

  /* 注册信息 */
  async signUp(@Body() body: CreateUserDto): Promise<void> {
    console.log('signup');
    
    return await this.usersRepository.createUser(body);
  }

 /* 登录信息 */
 async signIn(body: SignInDto): Promise<{ accessToken: string}>{
    const { username, password } = body;
    const user = await this.usersRepository.findOne({ username });
    if(user && await bcrypt.compare(password, user.password)){
      const payload: JwtPayload = { username };
      const accessToken = this.jwtServ.sign(payload);
      return { accessToken };
    }else{
      throw new UnauthorizedException('Please check your login info');
    }
 }
}
