import { InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { EntityRepository, getManager, Repository } from 'typeorm';
import { CreateMachineDto } from '../dto/create-machine.dto';
import { ImageMachineMapping } from '../entities/image-machine-mapping.entity';
import { MachineImage } from '../entities/image.entity';
import { Machine } from '../entities/machine.entity';
import { ImageMachineMappingsRepository } from './image-machine-mapping.repository';
import { MachineImagesRepository } from './image.repository';

/*
 * @Author: Ma Jade
 * @Date: 2022-07-04 16:08:30
 * @LastEditTime: 2022-07-05 13:45:53
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/machines/machines.repository.ts
 */
@EntityRepository(Machine)
export class MachinesRepository extends Repository<Machine> {
  private logger = new Logger('MachinesRepository');

  constructor(
    @InjectRepository(MachineImagesRepository)
    private machineImagesRepository: MachineImagesRepository,
    @InjectRepository(ImageMachineMappingsRepository)
    private mapping: ImageMachineMappingsRepository,
  ) {
    super();
  }
  async getMachines() {
    const query = this.createQueryBuilder('machine');

    try {
      const machines = await query.getMany();
      return machines;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException();
    }
  }

  async createMachine(
    createDto: CreateMachineDto,
    user: User,
  ): Promise<Machine> {
    console.log('create dto:', createDto);
    let machine: Machine;
    try {
      console.log('before create');
      machine = this.create({
        name: createDto.name,
        sn: createDto.sn,
        createdBy: user.id,
      });
      this.save(machine);
      return machine;
      // await getManager().transaction(async (entitymanager) => {
      //   console.log('create');
      //   machine = this.create({
      //     name: createDto.name,
      //     sn: createDto.sn,
      //     createdBy: user.id,
      //   });
      //   let img: MachineImage;
      //   let imgMapping: ImageMachineMapping;
      //   if (createDto.image) {
      //     img = this.machineImagesRepository.create({
      //       img: createDto.image,
      //       createdBy: user.id,
      //     });
      //   }
      //   this.logger.log('machine create');
      //   await entitymanager.save(machine);
      //   console.log('machin:', machine?.id);

      //   if (createDto.image) {
      //     await entitymanager.save(img);
      //     imgMapping = this.mapping.create({
      //       machine: machine,
      //       image: img,
      //       createdBy: user.id,
      //     });
      //     await entitymanager.save(imgMapping);
      //   }
      // });
      // return machine;
    } catch (error) {
      console.log('err:', error);
      throw new InternalServerErrorException();
    }
  }

  async updateMachine() {}

  async deleteMachine() {}
}
