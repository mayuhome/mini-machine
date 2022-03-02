/*
 * @Author: Ma Jade
 * @Date: 2022-03-02 14:28:00
 * @LastEditTime: 2022-03-02 16:17:55
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/auth/auth.controller.ts
 */
/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiProperty, ApiPropertyOptional, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { SignInDto, SignUpDto } from './auth.dto';
import { AuthService } from './auth.service';

@ApiTags('权限')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
  constructor(private readonly authServ: AuthService) {}

  @ApiOperation({summary: '登录'})
  @Post('sign-in')
  async signIn(@Body() body: SignInDto){
    return await this.authServ.signIn(body);
  }

  @ApiOperation({ summary: '注册'})
  @Post('sign-up')
  async signUp(@Body() body: SignUpDto){
      await this.authServ.signUp(body);
      return { message: 'OK'};
  }

  @ApiOperation({ summary: '登出'})
  @Post('sign-out')
  async signOut(@Req() req: Request){
    console.log('req:',req);
    
  }


}
