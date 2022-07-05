import { InternalServerErrorException, Logger } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { EntityRepository, QueryBuilder, Repository, UpdateResult } from 'typeorm';
import { CreateImageDto, UpdateImageDto } from '../dto/image.dto';
import { MachineImage } from '../entities/image.entity';

/*
 * @Author: Ma Jade
 * @Date: 2022-07-04 16:49:37
 * @LastEditTime: 2022-07-04 16:49:38
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/machines/repositories/image.repository.ts
 */
@EntityRepository(MachineImage)
export class MachineImagesRepository extends Repository<MachineImage> {
  private logger = new Logger('MachineImagesRepository');

  async getImages(): Promise<MachineImage[]> {
    const query = this.createQueryBuilder();
    return query.getMany();
  }

  async createImage(
    createImage: CreateImageDto,
    user: User,
  ): Promise<MachineImage> {
    try {
      const img = this.create({
        img: createImage.image,
        createdBy: user.id,
      });
      this.save(img);
      return img;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async updateImage(updateImage: UpdateImageDto, user: User) {
    const img = await this.findOne(updateImage.id);
    if (!img) {
      throw new Error(`图片ID不存在`);
    }
    img.img = updateImage.image;
    img.updatedBy = user.id;
    this.save(img);
  }

  async deleteImage(id: number): Promise<UpdateResult> {
    try {
      return await this.createQueryBuilder()
        .softDelete()
        .where('id = :id', { id })
        .execute();
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
