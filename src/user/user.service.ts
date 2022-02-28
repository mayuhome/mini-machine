/*
 * @Author: Ma Jade
 * @Date: 2022-02-28 16:51:46
 * @LastEditTime: 2022-02-28 17:04:25
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/user/user.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    findAll(): Promise<User[]>{
        return this.userRepository.find();
    }

    findOne(id: string): Promise<User>{
        return this.userRepository.findOne(id);
    }

    async remove(id: string): Promise<void>{
        await this.userRepository.delete(id);
    }
}
