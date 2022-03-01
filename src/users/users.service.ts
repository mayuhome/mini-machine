/*
 * @Author: Ma Jade
 * @Date: 2022-03-01 11:41:28
 * @LastEditTime: 2022-03-01 13:52:43
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/users/users.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){}
  async create(createUserDto: CreateUserDto):Promise<InsertResult> {
    let user = new User();
    Object.assign(user, createUserDto);
    return await this.userRepository.insert(user);
  }

  async findAll() : Promise<User[]>{
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
