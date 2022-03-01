/*
 * @Author: Ma Jade
 * @Date: 2022-03-01 11:12:58
 * @LastEditTime: 2022-03-01 14:13:59
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/machines/machines.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
import { Machine } from './entities/machine.entity';

@Injectable()
export class MachinesService {
  constructor(
    @InjectRepository(Machine)
    private userRepository: Repository<Machine>
  ){}
  create(createMachineDto: CreateMachineDto) {
    return 'This action adds a new machine';
  }

  findAll() {
    return `This action returns all machines`;
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
}
