/* eslint-disable prettier/prettier */
import { AuthGuard } from '@nestjs/passport';

/*
 * @Author: Ma Jade
 * @Date: 2022-03-02 11:39:59
 * @LastEditTime: 2022-03-02 11:39:59
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/auth/local-auth.guard.ts
 */
export class LocalAuthGuard extends AuthGuard('local') {

}
