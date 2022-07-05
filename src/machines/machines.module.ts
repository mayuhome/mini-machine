/*
 * @Author: Ma Jade
 * @Date: 2022-03-01 11:12:58
 * @LastEditTime: 2022-07-05 11:16:39
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/machines/machines.module.ts
 */
import { Module } from '@nestjs/common';
import { MachinesService } from './services/machines.service';
import { MachinesController } from './machines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Machine } from './entities/machine.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { LiveMachine, LiveMachintSchema } from './entities/machine.schema';
import { MachineImage } from './entities/image.entity';
import { ImageMachineMapping } from './entities/image-machine-mapping.entity';
import { MachinesRepository } from './repositories/machines.repository';
import { MachineImagesRepository } from './repositories/image.repository';
import { ImageMachineMappingsRepository } from './repositories/image-machine-mapping.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MachinesRepository,
      MachineImagesRepository,
      ImageMachineMappingsRepository,
    ]),
    MongooseModule.forFeature([
      { name: LiveMachine.name, schema: LiveMachintSchema },
    ]),
    AuthModule,
  ],
  // exports: [TypeOrmModule],
  controllers: [MachinesController],
  providers: [MachinesService],
})
export class MachinesModule {}
