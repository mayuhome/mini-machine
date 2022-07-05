/* eslint-disable prettier/prettier */
/*
 * @Author: Ma Jade
 * @Date: 2022-03-01 11:41:28
 * @LastEditTime: 2022-07-04 17:03:05
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/users/dto/create-user.dto.ts
 */
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({description: '用户名称'})
    @IsString()
    @MinLength(2)
    @MaxLength(20)
    username: string;
    @ApiPropertyOptional({description: '微信OpenId'})
    openId?: string;
    @ApiPropertyOptional({description: '邮箱地址'})
    email?: string;
    @ApiProperty({description: '用户密码'})
    @IsString()
    @MinLength(6, { message: '密码长度不能少于6位'})
    @MaxLength(20)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/, {
        message: 'password is too weak',
      })
    password: string;
}
