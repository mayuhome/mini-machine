/*
 * @Author: Ma Jade
 * @Date: 2022-03-01 11:12:58
 * @LastEditTime: 2022-03-01 14:35:49
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/machines/entities/machine.entity.ts
 */
import { EntityBase } from 'src/models/base';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Machine extends EntityBase {
  @PrimaryGeneratedColumn('uuid')
  Id: string;
  @Column()
  Name: string;
  @Column()
  SN: string;
  @Column()
  Status: number;
}
