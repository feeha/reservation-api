import * as helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet());
  app.enableCors();
  app.setGlobalPrefix('/api/v1');

  await app.listen(3000);
  console.log('Application is running on http://localhost:3000/api/v1/');
}
bootstrap();
