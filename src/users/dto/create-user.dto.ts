/* eslint-disable prettier/prettier */
/*
 * @Author: Ma Jade
 * @Date: 2022-03-01 11:41:28
 * @LastEditTime: 2022-03-01 13:32:32
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/users/dto/create-user.dto.ts
 */
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({description: '用户名称'})
    Name: string;
    @ApiPropertyOptional({description: '微信OpenId'})
    OpenId?: string;
    @ApiPropertyOptional({description: '邮箱地址'})
    Email?: string;
}
