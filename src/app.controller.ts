import { Controller, Get } from '@nestjs/common';

// decorator - nest makes use of decorators heavily
@Controller('/app')
export class AppController {
  @Get('/hi')
  getRootRoute() {
    return 'hi there!';
  }

  @Get('/bye')
  getByeRoute() {
    return 'bye there!';
  }
}
