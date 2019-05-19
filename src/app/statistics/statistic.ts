export class CharacterStatistic {
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

export class UserStatistic {
  isCerseiAlive: boolean;
  isDaenerysAlive: boolean;

  isJonAlive: boolean;
  isSansaAlive: boolean;
  isAryaAlive: boolean;
  isBranAlive: boolean;
  
  isHoundAlive: boolean;
  isMountainAlive: boolean;

  isNightKingAlive: boolean;

  getCleganeBowlResult() {
    return this.getDuelResult(this.isHoundAlive, this.isMountainAlive);
  }

  getQueensResult() {
    return this.getDuelResult(this.isCerseiAlive, this.isDaenerysAlive);
  }

  getDuelResult(rhs, lhs) {
    if (rhs == true && lhs == true) {
      return DuelResult.bothAlive;
    } else if (rhs == true && lhs == false) {
      return DuelResult.rightAlive;
    } else if (rhs == false && lhs == true) {
      return DuelResult.leftAlive;
    } else {
      return DuelResult.bothDead;
    }
  }

  getNumberOfStarksAlive() {
    return (this.isJonAlive ? 1 : 0) +
      (this.isAryaAlive ? 1 : 0) +
      (this.isSansaAlive ? 1 : 0) +
      (this.isBranAlive ? 1 : 0)
  }
}

export enum DuelResult {
  bothAlive, rightAlive, leftAlive, bothDead
}