import { ApiProperty } from '@nestjs/swagger';

/*
 * @Author: Ma Jade
 * @Date: 2022-03-02 14:29:06
 * @LastEditTime: 2022-07-04 17:04:35
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/auth/auth.dto.ts
 */
export class SignInDto {
  @ApiProperty({ description: '用户姓名' })
  readonly username: string;
  @ApiProperty({ description: '密码' })
  readonly password: string;
}

export class SignUpDto extends SignInDto {

}
