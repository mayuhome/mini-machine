/*
 * @Author: Ma Jade
 * @Date: 2022-03-01 11:12:58
 * @LastEditTime: 2022-03-01 14:31:55
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/machines/machines.module.ts
 */
import { Module } from '@nestjs/common';
import { MachinesService } from './machines.service';
import { MachinesController } from './machines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Machine } from './entities/machine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Machine])],
  // exports: [TypeOrmModule],
  controllers: [MachinesController],
  providers: [MachinesService]
})
export class MachinesModule {}
