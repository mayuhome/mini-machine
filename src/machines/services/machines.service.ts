/*
 * @Author: Ma Jade
 * @Date: 2022-03-01 11:12:58
 * @LastEditTime: 2022-07-05 16:50:24
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/machines/services/machines.service.ts
 */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { getManager, Repository } from 'typeorm';
import { CreateMachineDto } from '../dto/create-machine.dto';
import { CreateImageDto } from '../dto/image.dto';
import { CreateMappingDto } from '../dto/mapping.dto';
import { UpdateMachineDto } from '../dto/update-machine.dto';
import { ImageMachineMapping } from '../entities/image-machine-mapping.entity';
import { MachineImage } from '../entities/image.entity';
import { Machine } from '../entities/machine.entity';
import { LiveMachineDocument } from '../entities/machine.schema';
import { ImageMachineMappingsRepository } from '../repositories/image-machine-mapping.repository';
import { MachineImagesRepository } from '../repositories/image.repository';
import { MachinesRepository } from '../repositories/machines.repository';

@Injectable()
export class MachinesService {
  constructor(
    @InjectRepository(MachinesRepository)
    private machineRepository: MachinesRepository,
    @InjectRepository(MachineImagesRepository)
    private machineImagesRepository: MachineImagesRepository,
    @InjectRepository(ImageMachineMappingsRepository)
    private mapping: ImageMachineMappingsRepository,
    @InjectModel('LiveMachine') private liveMachine: Model<LiveMachineDocument>,
  ) {}
  async create(
    createMachineDto: CreateMachineDto,
    user: User,
  ): Promise<Machine> {
    return await getManager().transaction(async (entitymanager) => {
      const machine = await this.machineRepository.createMachine(
        createMachineDto,
        user,
      );
      if (createMachineDto.image) {
        const createImg = new CreateImageDto();
        createImg.image = createMachineDto.image;
        const img = await this.machineImagesRepository.createImage(
          createImg,
          user,
        );
        const createMapping = new CreateMappingDto();
        createMapping.machine = machine;
        createMapping.image = img;
        await this.mapping.createMapping(createMapping, user);
      }
      return machine;
    });
    // return this.machineRepository.createMachine(createMachineDto, user);
  }

  findAll(): Promise<Machine[]> {
    return this.machineRepository.getMachines();
  }

  findOne(id: number) {
    return `This action returns a #${id} machine`;
  }

  update(id: number, updateMachineDto: UpdateMachineDto) {
    return `This action updates a #${id} machine`;
  }

  remove(id: number) {
    return `This action removes a #${id} machine`;
  }

  // /* 自动插入假数据 */
  // async createMockStatus(){
  //   // const createdLiveMachine = new this.liveMachine()
  //   const machines = await this.machineRepository.find();
  //   interval(5000).pipe(
  //     // switchMap(() => {
  //     //   // const createdLiveMachine = new this.liveMachine()
  //     // });
  //   )
  // }
}
