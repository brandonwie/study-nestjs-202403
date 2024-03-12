import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

// expected to pass config option/object to module
@Module({
  controllers: [AppController],
})
export class AppModule {}
