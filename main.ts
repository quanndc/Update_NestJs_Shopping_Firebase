import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {initializeApp, credential} from 'firebase-admin';
import * as keys from '../keys/firebase-admin.json';
import * as admin from 'firebase-admin'

async function bootstrap() {
  admin.initializeApp({
    credential: credential.cert(keys as admin.ServiceAccount)
  });
  const app = await NestFactory.create(AppModule);
  
  await app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}
bootstrap();
