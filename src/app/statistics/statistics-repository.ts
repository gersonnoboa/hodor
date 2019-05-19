import { CharacterStatistic, DuelResult } from "./statistic";
import { StatisticsService } from "./statistics.service";
import { StatisticsAdapter } from "./statistics-adapter";
import { Injectable } from "@angular/core";
import { reject } from "q";
import { Facts, NumberFacts, Saves, NumberCompoundFact, Duel, StarkSurvival } from "./facts";
import { RemoteStatistics } from "./remote-statistics";

@Injectable({
  providedIn: 'root'
})
export class StatisticsRepository {
  private statistics: RemoteStatistics;
  
  constructor(private service: StatisticsService) { }

  async getStatistics() {
    if (this.statistics == undefined) {
      this.statistics = await this.getStatisticsFromService();
    }
  }

  private getStatisticsFromService() {
    return this.service.getCharacterStatistics()
      .toPromise()
      .then(result => {
        let adapter = new StatisticsAdapter();
        let statistics = adapter.getStatisticsFrom(result as Array<any>);

        return statistics;
      });
  }

  extractCharacters() {
    return this.statistics.characterStatistics.map(value => { return value.name });
  }

  getDataForCharacter(character: string) {
    let filteredCharacter = this.statistics.characterStatistics.filter(value => { return value.name == character });

    if (filteredCharacter.length == 0) { return [0, 0, 0] }
    
    let characterObject = filteredCharacter[0];
    return [characterObject.alive, characterObject.dead, characterObject.whiteWalker];
  }

  getFacts() {
    let facts = new Facts();
    
    this.statistics.characterStatistics.forEach(element => {
      this.updateNumberFacts(facts.numberFacts, element);
      this.updateSaves(facts.saves, element);
    });

    this.updateDuelsAndSurvivals(facts);
    return facts;
  }

  updateNumberFacts(numberFacts: NumberFacts, element: CharacterStatistic) {
    numberFacts.numberOfVotes += element.total;
    numberFacts.numberOfAlives += element.alive;
    numberFacts.numberOfDeaths += element.dead;
    numberFacts.numberOfWhiteWalkers += element.whiteWalker;
  }

  updateSaves(saves: Saves, element: CharacterStatistic) {
    if (element.alive > saves.mostSavedCharacter.value) {
      saves.mostSavedCharacter = new NumberCompoundFact(element.name, element.alive);
    }

    if (element.dead > saves.mostKilledCharacter.value) {
      saves.mostKilledCharacter = new NumberCompoundFact(element.name, element.dead);
    }

    if (element.whiteWalker > saves.mostWhiteWalkerCharacter.value) {
      saves.mostWhiteWalkerCharacter = new NumberCompoundFact(element.name, element.whiteWalker);
    }
 } 

  updateDuelsAndSurvivals(facts: Facts) {
    this.statistics.userStatistics.forEach(element => {
      this.updateDuel(facts.cleganeBowl, element.getCleganeBowlResult());
      this.updateDuel(facts.queens, element.getQueensResult());
      this.updateStarks(facts.starkSurvival, element.getNumberOfStarksAlive());
      facts.numberOfNightKingVictories += element.isNightKingAlive ? 1 : 0;
    });
  }

  private updateDuel(duel: Duel, result: DuelResult) {
    switch (result) {
      case DuelResult.bothAlive:
        duel.bothAlive++;
        break;
      case DuelResult.rightAlive:
        duel.rightAlive++;
        break;
      case DuelResult.leftAlive:
        duel.leftAlive++;
        break;
      case DuelResult.bothDead:
        duel.bothDead++;
        break;
    }
  }

  private updateStarks(starks: StarkSurvival, survivors: number) {
    switch (survivors) {
      case 4:
        starks.all++;
        break;
      case 3:
        starks.three++;
        break;
      case 2:
        starks.two++;
        break;
      case 1:
        starks.one++;
        break;
      case 0:
        starks.none++;
        break;
    }
  }
}
