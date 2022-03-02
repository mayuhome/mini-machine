/*
 * @Author: Ma Jade
 * @Date: 2022-03-01 11:41:28
 * @LastEditTime: 2022-03-02 17:18:22
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/users/users.module.ts
 */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  // exports: [TypeOrmModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
