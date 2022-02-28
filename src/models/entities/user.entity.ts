import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/*
 * @Author: Ma Jade
 * @Date: 2022-02-28 16:48:51
 * @LastEditTime: 2022-02-28 16:57:36
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/models/entities/user.entity.ts
 */
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    openId?: string;
    @Column()
    email?: string;
    @Column({default: true})
    isAvtive: boolean;
}