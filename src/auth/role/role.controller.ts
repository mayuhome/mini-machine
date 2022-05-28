/*
 * @Author: Ma Jade
 * @Date: 2022-05-28 18:22:40
 * @LastEditTime: 2022-05-28 23:26:50
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/auth/role/role.controller.ts
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { User } from 'src/users/entities/user.entity';
import { GetUser } from '../get-user.decorator';
import { GetRoleFilterDto } from './dto/get-role-filter.dto';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto, @GetUser() user: User) {
    return this.roleService.create(createRoleDto, user);
  }

  @Get()
  findAll(@Query() filterDto: GetRoleFilterDto, @GetUser() user: User) {
    return this.roleService.findAll(filterDto, user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleService.remove(+id);
  }
}
