/* eslint-disable prettier/prettier */
/*
 * @Author: Ma Jade
 * @Date: 2022-03-02 11:05:47
 * @LastEditTime: 2022-03-02 17:24:19
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/auth/auth.service.ts
 */
import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectEntityManager } from '@nestjs/typeorm';
import { compare, genSalt, hash } from 'bcrypt';
import { LoginDto } from 'src/models/auth.model';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { EntityManager } from 'typeorm';
import { SignInDto, SignUpDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectEntityManager() private readonly em: EntityManager,
    private readonly usersServ: UsersService,
    private readonly jwtServ: JwtService,
  ) {}

  async validateUser(login: LoginDto): Promise<any> {
    const user = await this.usersServ.findUserByEmail(login.UserName);
    console.log('user:', user);
    if (user?.Password === login.Password) {
      const { Password, ...rel } = user;
      return rel;
    }
    return null;
  }

  /* 注册信息 */
  async signUp(@Body() body: SignUpDto) {
    await this.em.transaction(async (em) => {
      const isExist = await em.findOne(User, { Email: body.Email });
      if (isExist) {
        throw new Error(`Email is existed, please login!`);
      }
      const user = new User();
      user.Email = body.Email;
      user.Name = body.Name;
      user.Password = await genSalt().then(s => hash(body.Password, s));

      await em.save(user);
    });
  }

 /* 登录信息 */
 async signIn(body: SignInDto): Promise<string>{
    const user = await this.usersServ.findUserByEmail(body.Email);
    if(!user){
        throw new BadRequestException(`Email not existed!`);
    }
    const isCorrectPwd = await compare(body.Password, user.Password);
    if(!isCorrectPwd){
        throw new BadRequestException(`Password is not correct!`);
    }
    const token = await this.jwtServ.sign(
        {
            userId: user.Id,
            email: user.Email
        }
    );
    return token;
 }
}
