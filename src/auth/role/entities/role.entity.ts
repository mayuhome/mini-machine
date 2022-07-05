/*
 * @Author: Ma Jade
 * @Date: 2022-05-28 18:22:40
 * @LastEditTime: 2022-07-04 17:03:53
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/auth/role/entities/role.entity.ts
 */
import { EntityBase } from 'src/models/base';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role extends EntityBase {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 20 })
  name: string;
}
