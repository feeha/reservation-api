import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import * as helmet from 'helmet';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet());
  app.enableCors();
  app.setGlobalPrefix('/api/v1');

  const Port = Number(process.env.PORT) || 3000;
  await app.listen(Port);
  console.log('Application is running on http://localhost:80/api/v1/');
}
bootstrap();
