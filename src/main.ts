import { Controller, Get, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core'; // very few things are exported from core

// decorator - nest makes use of decorators heavily
@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return 'hi there!';
  }
}

// expected to pass config option/object to module
@Module({
  controllers: [AppController],
})
class AppModule {}

// just conventional fn name
async function bootstrap() {
  // create instance
  const app = await NestFactory.create(AppModule);

  // Express와 비슷하다
  await app.listen(3000);
}

bootstrap();
