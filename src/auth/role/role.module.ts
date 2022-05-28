/*
 * @Author: Ma Jade
 * @Date: 2022-05-28 18:22:40
 * @LastEditTime: 2022-05-28 23:33:35
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/auth/role/role.module.ts
 */
import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesRepository } from './roles.repository';
import { AuthModule } from '../auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([RolesRepository]), AuthModule],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
