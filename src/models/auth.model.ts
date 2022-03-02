import { ApiProperty } from '@nestjs/swagger';

/*
 * @Author: Ma Jade
 * @Date: 2022-03-02 13:45:06
 * @LastEditTime: 2022-03-02 13:45:06
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/models/auth.model.ts
 */
export class LoginDto {
  @ApiProperty({ description: '用户名称' })
  readonly UserName: string;
  @ApiProperty({ description: '用户密码' })
  readonly Password: string;
}
