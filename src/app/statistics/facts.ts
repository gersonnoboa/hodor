export class Facts {
  numberFacts: NumberFacts;
  saves: Saves;
  numberOfNightKingVictories: number;
  cleganeBowl: CleganeBowl;
  queens: Queens;
  starkSurvival: StarkSurvival;

  constructor(){
    this.numberFacts = new NumberFacts();
    this.saves = new Saves();
    this.cleganeBowl = new CleganeBowl();
    this.queens = new Queens();
    this.starkSurvival = new StarkSurvival();
    this.numberOfNightKingVictories = 0;
  }
}

export class NumberFacts {
  numberOfVotes: number;
  numberOfAlives: number;
  numberOfDeaths: number;
  numberOfWhiteWalkers: number;

  constructor() {
    this.numberOfVotes = 0;
    this.numberOfAlives = 0;
    this.numberOfDeaths = 0;
    this.numberOfWhiteWalkers = 0;
  }

  percentageOfAlives() {
    return ((this.numberOfAlives / this.numberOfVotes) * 100).toFixed(0);
  }

  percentageOfDeaths() {
    return ((this.numberOfDeaths / this.numberOfVotes) * 100).toFixed(0);
  }

  percentageOfWhiteWalkers() {
    return ((this.numberOfWhiteWalkers / this.numberOfVotes) * 100).toFixed(0);
  }
}

export class Saves {
  mostSavedCharacter: NumberCompoundFact;
  mostKilledCharacter: NumberCompoundFact;
  mostWhiteWalkerCharacter: NumberCompoundFact;

  constructor() {
    this.mostSavedCharacter = new NumberCompoundFact("", 0);
    this.mostKilledCharacter = new NumberCompoundFact("", 0);
    this.mostWhiteWalkerCharacter = new NumberCompoundFact("", 0);
  }
}

export class NumberCompoundFact {
  name: string;
  value: number;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value
  }
}

export class Duel {
  bothAlive: number;
  rightAlive: number;
  leftAlive: number;
  bothDead: number;

  constructor() {
    this.bothAlive = 0;
    this.rightAlive = 0;
    this.leftAlive = 0;
    this.bothDead = 0;
  }
}

class CleganeBowl extends Duel { }

class Queens extends Duel { }

export class StarkSurvival {
  all: number;
  three: number;
  two: number;
  one: number;
  none: number;

  constructor() {
    this.all = 0;
    this.three = 0;
    this.two = 0;
    this.one = 0;
    this.none = 0;
  }
}