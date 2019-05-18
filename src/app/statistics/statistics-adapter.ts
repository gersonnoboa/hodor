import { Statistic } from "./statistic";

export class StatisticsAdapter {
  getStatisticsFrom(data) {
    let statistics = new Array<Statistic>();

    data.forEach(element => {
      let name = element.name;
      let alive = element.statusCollection.alive;
      let dead = element.statusCollection.dead;
      let whiteWalker = element.statusCollection.whiteWalker;
      let total = element.statusCollection.total;

      let statistic = new Statistic(name, alive, dead, whiteWalker, total);
      statistics.push(statistic);
    });
    
    return statistics;
  }  
}