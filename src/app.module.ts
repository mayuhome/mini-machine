/*
 * @Author: Ma Jade
 * @Date: 2022-02-28 13:31:00
 * @LastEditTime: 2022-05-29 17:13:31
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/app.module.ts
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MachinesModule } from './machines/machines.module';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './auth/role/role.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    MachinesModule,
    UsersModule,
    RoleModule,
    AuthModule,
  ],
  // controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
