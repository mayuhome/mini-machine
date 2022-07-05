/*
 * @Author: Ma Jade
 * @Date: 2022-07-04 15:13:38
 * @LastEditTime: 2022-07-04 15:25:14
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/schemas/machine.schema.ts
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { EStatus } from 'src/machines/dto/status.enum';

export type LiveMachineDocument = LiveMachine & Document;

@Schema()
export class LiveMachine extends Document {
  @Prop({ required: true })
  uuid: string;

  @Prop()
  status: EStatus;

  @Prop()
  time: string;
}

export const LiveMachintSchema = SchemaFactory.createForClass(LiveMachine);
