import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';

/*
 * @Author: Ma Jade
 * @Date: 2022-05-28 23:21:15
 * @LastEditTime: 2022-05-28 23:21:16
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/auth/get-user.decorator.ts
 */
export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.User;
  },
);
