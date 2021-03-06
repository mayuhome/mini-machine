/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: Ma Jade
 * @Date: 2022-03-01 11:41:28
 * @LastEditTime: 2022-03-03 11:16:17
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/users/users.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private userRepository: Repository<UsersRepository>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    // let user = new User();
    // Object.assign(user, createUserDto);
    // return await this.userRepository.insert(user);
  }

  // async findAll(): Promise<User[]> {
  //   return await this.userRepository.find();
  // }

  // async findOne(id: string): Promise<User> {
  //   return await this.userRepository.findOne(id);
  // }

  // async findUserByEmail(email: string): Promise<User> {
  //   console.log('email');
    
  //   const user = await this.userRepository
  //     .createQueryBuilder('user')
  //     .where('user.Email = :email', { email })
  //     .getOne();
  //   return user;
  // }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
