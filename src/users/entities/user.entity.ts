/*
 * @Author: Ma Jade
 * @Date: 2022-03-01 11:41:28
 * @LastEditTime: 2022-07-05 11:25:36
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/users/entities/user.entity.ts
 */
import { Role } from 'src/auth/role/entities/role.entity';
import { EntityBase } from 'src/models/base';
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class User extends EntityBase {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ length: 20 })
  @Index({ unique: true })
  username: string;
  @Column({ length: 128, default: '' })
  @Index({ unique: true })
  openId?: string;
  @Column({ length: 64, default: '' })
  @Index({ unique: true })
  email?: string;
  @Column()
  password: string;
  @ManyToOne(() => Role)
  roles: Role[];
}
