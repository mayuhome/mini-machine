/*
 * @Author: Ma Jade
 * @Date: 2022-03-01 11:12:58
 * @LastEditTime: 2022-07-05 14:08:18
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/machines/entities/machine.entity.ts
 */
import { EntityBase } from 'src/models/base';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { EStatus } from '../dto/status.enum';

@Entity()
export class Machine extends EntityBase {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  @Index({ unique: true })
  name: string;
  @Column()
  sn: string;
  @Column({ default: EStatus.Offline })
  status: number;
}
