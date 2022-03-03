/* eslint-disable prettier/prettier */
/*
 * @Author: Ma Jade
 * @Date: 2022-02-28 13:31:00
 * @LastEditTime: 2022-03-02 14:31:42
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/app.controller.ts
 */
import { AppService } from './app.service';

export class AppController {
  constructor(
    private readonly appService: AppService,
    ) {}

}
