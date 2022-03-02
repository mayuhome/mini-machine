/* eslint-disable prettier/prettier */
/*
 * @Author: Ma Jade
 * @Date: 2022-02-28 13:31:00
 * @LastEditTime: 2022-03-02 14:31:42
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/app.controller.ts
 */
import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { CreateMachineDto } from './machines/dto/create-machine.dto';
import { LoginDto } from './models/auth.model';

export class AppController {
  constructor(
    private readonly appService: AppService,
    ) {}

}
