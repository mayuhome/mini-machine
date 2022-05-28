/*
 * @Author: Ma Jade
 * @Date: 2022-03-01 11:41:28
 * @LastEditTime: 2022-05-28 23:59:38
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/users/entities/user.entity.ts
 */
import { Role } from 'src/auth/role/entities/role.entity';
import { EntityBase } from 'src/models/base';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends EntityBase {
  @PrimaryGeneratedColumn('uuid')
  Id: string;
  @Column({ length: 20 })
  Username: string;
  @Column({ length: 128, default: '' })
  OpenId?: string;
  @Column({ length: 64, default: '' })
  Email?: string;
  @Column()
  Password: string;
  @ManyToOne(() => Role)
  Roles: Role[];
}
