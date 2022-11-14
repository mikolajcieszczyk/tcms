import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(
    session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: true }));
  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: ['POST', 'PUT', 'DELETE', 'GET', 'PATCH'],
  });
  await app.listen(process.env.PORT);
}
bootstrap();
