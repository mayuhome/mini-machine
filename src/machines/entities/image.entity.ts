import { EntityBase } from 'src/models/base';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/*
 * @Author: Ma Jade
 * @Date: 2022-07-04 16:27:17
 * @LastEditTime: 2022-07-04 16:27:18
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/machines/entities/image.entity.ts
 */

@Entity()
export class MachineImage extends EntityBase {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    img: string;
}