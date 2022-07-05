import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

/*
 * @Author: Ma Jade
 * @Date: 2022-05-28 22:27:50
 * @LastEditTime: 2022-07-05 11:27:13
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/users/users.repository.ts
 */
@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(createDto: CreateUserDto): Promise<void> {
    const { username, password } = createDto;
    console.log('creata:', createDto);
    // const isExsit = await this.findOne({ username });
    // if(isExsit){
    //   throw 
    // }
    const salt = await bcrypt.genSalt();
    const hashedPwd = await bcrypt.hash(password, salt);
    const user = this.create({
      username,
      password: hashedPwd,
    });
    try {
      await this.save(user);
    } catch (error) {
        console.log('error:',error);
        
      if (error.errno === 1062) {
        throw new ConflictException('Username is exists.');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
