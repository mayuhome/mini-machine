/*
 * @Author: Ma Jade
 * @Date: 2022-02-28 13:31:00
 * @LastEditTime: 2022-02-28 15:13:28
 * @LastEditors: Ma Jade
 * @FilePath: /backend/mini-machine/src/main.ts
 */
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // add swagger module
  const options = new DocumentBuilder()
  .setTitle('mini-machine APIs')
  .setDescription('为小程序所做后端api接口')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
