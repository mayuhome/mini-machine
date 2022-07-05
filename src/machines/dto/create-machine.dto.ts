/*
 * @Author: Ma Jade
 * @Date: 2022-03-01 11:12:58
 * @LastEditTime: 2022-03-01 11:30:37
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/machines/dto/create-machine.dto.ts
 */
export class CreateMachineDto {
    name: string;
    sn: string;
    image?: string;
}
