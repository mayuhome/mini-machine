import { InternalServerErrorException, Logger } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateMappingDto } from '../dto/mapping.dto';
import { ImageMachineMapping } from '../entities/image-machine-mapping.entity';
import { MachineImage } from '../entities/image.entity';
import { Machine } from '../entities/machine.entity';

/*
 * @Author: Ma Jade
 * @Date: 2022-07-04 16:51:09
 * @LastEditTime: 2022-07-04 16:51:10
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/machines/repositories/image-machine-mapping.repository.ts
 */
@EntityRepository(ImageMachineMapping)
export class ImageMachineMappingsRepository extends Repository<ImageMachineMapping> {
  private logger = new Logger('ImageMachineMappingsRepository');

  async getMappings(): Promise<ImageMachineMapping[]> {
    return this.createQueryBuilder().getMany();
  }
  async createMapping(
    create: CreateMappingDto,
    user: User,
  ): Promise<ImageMachineMapping> {
    try {
      const { machine, image } = create;
      const mapping = this.create({
        machine,
        image,
        createdBy: user.id,
      });
      this.save(mapping);
      return mapping;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async updateMapping() {}

  async deleteMapping() {}
}
