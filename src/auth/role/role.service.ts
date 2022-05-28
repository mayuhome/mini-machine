import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { GetRoleFilterDto } from './dto/get-role-filter.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { RolesRepository } from './roles.repository';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RolesRepository)
    private rolesRepository: RolesRepository,
  ) {}
  async create(createRoleDto: CreateRoleDto, user: User): Promise<Role> {
    return this.rolesRepository.createRole(createRoleDto, user);
  }

  findAll(search: GetRoleFilterDto, user: User): Promise<Role[]> {
    return this.rolesRepository.getRoles(search, user);
  }

  findOne(id: number): Promise<Role> {
    return this.rolesRepository.findOne(id);
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
