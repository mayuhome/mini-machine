import { InternalServerErrorException, Logger } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { GetRoleFilterDto } from './dto/get-role-filter.dto';
import { Role } from './entities/role.entity';

/*
 * @Author: Ma Jade
 * @Date: 2022-05-28 21:46:14
 * @LastEditTime: 2022-05-30 00:16:35
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/auth/role/roles.repository.ts
 */
@EntityRepository(Role)
export class RolesRepository extends Repository<Role> {
  private logger = new Logger('RolesRepository');

  async getRoles(filter: GetRoleFilterDto, user: User): Promise<Role[]> {
    const { search } = filter;
    const query = this.createQueryBuilder('role');
    // query.where({ user });

    if (search) {
      query.andWhere(`(LOWER(role.Name) LIKE LOWER(:search))`, {
        search: `%${search}%`,
      });
    }

    try {
      const roles = await query.getMany();
      return roles;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException();
    }
  }

  async createRole(createDto: CreateRoleDto, user: User): Promise<Role> {
    const { Name } = createDto;

    const role = this.create({
      Name,
      CreatedBy: user.Id,
    });

    await this.save(role);
    return role;
  }
}
