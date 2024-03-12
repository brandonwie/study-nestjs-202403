import { Controller, Module } from '@nestjs/common';

// decorator - nest makes use of decorators heavily
@Controller()
class AppController {
  getRootRoute() {}
}
