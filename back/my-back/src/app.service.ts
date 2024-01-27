import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  monsters: ['Rathian', 'Weird guy', 'Not a monster !', 'Guilty as charged !'];
  getHello(): string {
    return 'Hello World!';
  }

  getMonsters() {
    return this.monsters;
  }
  addMonster(monster) {
    this.monsters.push(monster);
    return 'Monster added : ' + monster;
  }
}
