import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Response as Res } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('monsters')
  getMonsters(res: Res): Res {
    return res.json(this.appService.getMonsters());
  }
}
