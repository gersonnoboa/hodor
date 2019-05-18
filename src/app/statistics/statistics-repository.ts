import { Statistic } from "./statistic";
import { StatisticsService } from "./statistics.service";
import { StatisticsAdapter } from "./statistics-adapter";
import { Injectable } from "@angular/core";
import { reject } from "q";
import { Facts, NumberFacts, Saves, NumberCompoundFact } from "./facts";

@Injectable({
  providedIn: 'root'
})
export class StatisticsRepository {
  private statistics: Statistic[];
  
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
    return this.statistics.map(value => { return value.name });
  }

  getDataForCharacter(character: string) {
    let filteredCharacter = this.statistics.filter(value => { return value.name == character });

    if (filteredCharacter.length == 0) { return [0, 0, 0] }
    
    let characterObject = filteredCharacter[0];
    return [characterObject.alive, characterObject.dead, characterObject.whiteWalker];
  }

  getFacts() {
    let facts = new Facts();
    
    this.statistics.forEach(element => {
      this.updateNumberFacts(facts.numberFacts, element);
      this.updateSaves(facts.saves, element);
    });

    console.log(facts);
  }

  updateNumberFacts(numberFacts: NumberFacts, element: Statistic) {
    numberFacts.numberOfVotes += element.total;
    numberFacts.numberOfAlives += element.alive;
    numberFacts.numberOfDeaths += element.dead;
    numberFacts.numberOfWhiteWalkers += element.whiteWalker;
  }

  updateSaves(saves: Saves, element: Statistic) {
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

}
