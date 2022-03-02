import { Column } from 'typeorm';

/*
 * @Author: Ma Jade
 * @Date: 2022-03-01 10:01:07
 * @LastEditTime: 2022-03-01 14:36:26
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/models/base.ts
 */
export class EntityBase {
  @Column({ default: '' })
  CreatedBy?: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  CreatedTime: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  UpdatedTime: Date;
  @Column({ default: true })
  IsActive: boolean;
}
