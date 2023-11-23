import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  
  app.use(
    session({
      name: 'NestjsCokie',
      secret:'my-secret',
      resave:false,
      saveUninitialized:true,  //Unique code returned in console 
      cookie:{
        maxAge: 300000
      }
    })
  );
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}

bootstrap();
