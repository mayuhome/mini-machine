import { IsOptional, IsString } from 'class-validator';

/*
 * @Author: Ma Jade
 * @Date: 2022-05-28 21:54:50
 * @LastEditTime: 2022-05-28 21:54:50
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/auth/role/dto/get-role-filter.dto.ts
 */
export class GetRoleFilterDto {
  @IsOptional()
  @IsString()
  search?: string;
}
