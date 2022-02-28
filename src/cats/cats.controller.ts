/*
 * @Author: Ma Jade
 * @Date: 2022-02-28 13:55:43
 * @LastEditTime: 2022-02-28 14:54:55
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/cats/cats.controller.ts
 */
import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Get(':id')
    findAll(@Param() params): string{
        console.log('params:', params);
        
        return `This action returns all cats, id is ${params.id}!`;
    }

    @Post()
    create(): string{
        return `This action adds a new cat`;
    }
}
