/*
 * @Author: Ma Jade
 * @Date: 2022-02-28 13:31:00
 * @LastEditTime: 2022-03-01 14:12:36
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/app.module.ts
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MachinesModule } from './machines/machines.module';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { MachinesController } from './machines/machines.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
     
    MachinesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(
    private readonly connection: Connection
  ){}
}
