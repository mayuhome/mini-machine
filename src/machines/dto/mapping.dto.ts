import { MachineImage } from '../entities/image.entity';
import { Machine } from '../entities/machine.entity';

/*
 * @Author: Ma Jade
 * @Date: 2022-07-05 16:24:08
 * @LastEditTime: 2022-07-05 16:24:10
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/machines/dto/mapping.dto.ts
 */
export class CreateMappingDto {
    machine: Machine;
    image: MachineImage;
}

export class UpdateMappingDto extends CreateMappingDto {
    id: number;
}