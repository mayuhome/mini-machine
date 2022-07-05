/*
 * @Author: Ma Jade
 * @Date: 2022-07-05 15:45:37
 * @LastEditTime: 2022-07-05 15:45:38
 * @LastEditors: Ma Jade
 * @FilePath: /mini-machine/src/machines/dto/create-image.dto.ts
 */
export class CreateImageDto {
    image: string;
}

export class UpdateImageDto {
    id: string;
    image: string;
}