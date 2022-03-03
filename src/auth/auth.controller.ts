/*
 * @Author: Ma Jade
 * @Date: 2022-03-02 14:28:00
 * @LastEditTime: 2022-03-03 15:14:38
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/auth/auth.controller.ts
 */
/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiProperty, ApiPropertyOptional, ApiTags } from '@nestjs/swagger';
import { SignInDto, SignUpDto } from './auth.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('权限')
@Controller('auth')
export class AuthController {
  constructor(private readonly authServ: AuthService) {
      console.log('auth controller');
      
  }

  @UseGuards(AuthGuard('local'))
  @ApiOperation({summary: '登录'})
  @Post('sign-in')
  async signIn(@Body() body: SignInDto){
    console.log('signin');
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
