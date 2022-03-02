/*
 * @Author: Ma Jade
 * @Date: 2022-03-01 11:41:28
 * @LastEditTime: 2022-03-02 15:22:29
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/users/entities/user.entity.ts
 */
import { EntityBase } from 'src/models/base';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends EntityBase {
  @PrimaryGeneratedColumn('uuid')
  Id: string;
  @Column({ length: 20 })
  Name: string;
  @Column({ length: 128, default: '' })
  OpenId?: string;
  @Column({ length: 64 })
  Email?: string;
  @Column()
  Password: string;
}
