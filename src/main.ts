import { NestFactory } from '@nestjs/core'; // very few things are exported from core
import { AppController } from './app.controller';
import { AppModule } from './app.module';

// just conventional fn name
async function bootstrap() {
  // create instance
  const app = await NestFactory.create(AppModule);

  // Express와 비슷하다
  await app.listen(3000);
}

bootstrap();
