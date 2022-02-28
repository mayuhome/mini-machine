/*
 * @Author: Ma Jade
 * @Date: 2022-02-28 16:58:37
 * @LastEditTime: 2022-02-28 17:23:52
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/user/user.controller.ts
 */
import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/models/entities/user.entity';
import { UserService } from './user.service';

@ApiTags('用户')
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){

    }
    @ApiOperation({summary:'查找用户'})
    @Get(':id')
    findById(@Query() id): Promise<User>{
        console.log('params:', id);
        
        return this.userService.findOne(id);
    }

    @Post()
    create(): string{
        return `This action adds a new cat`;
    }
}
