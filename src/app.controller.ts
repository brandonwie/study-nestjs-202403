import { Controller, Get, Module } from '@nestjs/common';

// decorator - nest makes use of decorators heavily
@Controller()
export class AppController {
  @Get('/test')
  getRootRoute() {
    return 'hi there!';
  }
}
