import { ApiProperty } from '@nestjs/swagger';

/*
 * @Author: Ma Jade
 * @Date: 2022-03-02 14:29:06
 * @LastEditTime: 2022-03-03 10:02:37
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/auth/auth.dto.ts
 */
export class SignInDto {
  @ApiProperty({ description: '用户姓名' })
  readonly Username: string;
  @ApiProperty({ description: '密码' })
  readonly Password: string;
}

export class SignUpDto extends SignInDto {

}
