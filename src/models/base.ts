import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

/*
 * @Author: Ma Jade
 * @Date: 2022-03-01 10:01:07
 * @LastEditTime: 2022-07-04 17:01:16
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/models/base.ts
 */
export class EntityBase {
  @Column({ default: true })
  isActive: boolean;
  @Column({ default: '' })
  createdBy?: string;
  @Column({ default: '' })
  updatedBy?: string;
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdTime: Date;
  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedTime: Date;
  @DeleteDateColumn({ type: 'timestamp' })
  deletedTime?: Date;
}
