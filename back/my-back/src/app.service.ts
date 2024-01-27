import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMonsters() {
    return {
      monsters: [
        'Rathian',
        'Weird guy',
        'Not a monster !',
        'Guilty as charged !',
      ],
    };
  }
}
