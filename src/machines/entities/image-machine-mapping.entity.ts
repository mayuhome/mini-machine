/*
 * @Author: Ma Jade
 * @Date: 2022-07-04 16:34:42
 * @LastEditTime: 2022-07-05 14:27:13
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/machines/entities/image-machine-mapping.entity.ts
 */
import { EntityBase } from 'src/models/base';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MachineImage } from './image.entity';
import { Machine } from './machine.entity';

/*
 * @Author: Ma Jade
 * @Date: 2022-07-04 16:34:42
 * @LastEditTime: 2022-07-04 16:34:44
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/machines/entities/image-machine-mapping.entity.ts
 */

@Entity()
export class ImageMachineMapping extends EntityBase {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne((type) => Machine, (machine) => machine.id)
//   @JoinColumn()
  machine: Machine;

  @ManyToOne((type) => MachineImage, (image) => image.id)
//   @Column({ name: 'ImageId' })
  image: MachineImage;
}
