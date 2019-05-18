export class Statistic {
  name: string;
  alive: number;
  dead: number;
  whiteWalker: number;
  total: number;

  constructor(name: string, alive: number, dead: number, whiteWalker: number, total: number) {
    this.name = name;
    this.alive = alive;
    this.dead = dead;
    this.whiteWalker = whiteWalker;
    this.total = total;
  }
}