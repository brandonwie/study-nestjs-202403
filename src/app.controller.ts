import { Controller, Get, Module } from '@nestjs/common';

// decorator - nest makes use of decorators heavily
@Controller()
export class AppController {
  @Get()
  getRootRoute() {
    return 'hi there!';
  }
}
