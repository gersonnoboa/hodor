import { CharacterStatistic, UserStatistic } from "./statistic";
import { RemoteStatistics } from "./remote-statistics";

export class StatisticsAdapter {
  getStatisticsFrom(data) {
    let remoteStatistics = new RemoteStatistics();
    remoteStatistics.characterStatistics = this.getCharacterStatistics(data);
    remoteStatistics.userStatistics = this.getUserStatistics(data);

    return remoteStatistics;
  }

  getCharacterStatistics(data) {
    let characterStatistics = new Array<CharacterStatistic>();

    data.characterStatistics.forEach(element => {
      let name = element.name;
      let alive = element.statusCollection.alive;
      let dead = element.statusCollection.dead;
      let whiteWalker = element.statusCollection.whiteWalker;
      let total = element.statusCollection.total;

      let statistic = new CharacterStatistic(name, alive, dead, whiteWalker, total);
      characterStatistics.push(statistic);
    });

    return characterStatistics;
  }

  getUserStatistics(data) {
    let userStatistics = new Array<UserStatistic>();

    data.userStatistics.forEach(element => {
      let statistic = new UserStatistic();
      statistic.isCerseiAlive = element.isCerseiAlive;
      statistic.isDaenerysAlive = element.isDaenerysAlive;
      statistic.isJonAlive = element.isJonAlive;
      statistic.isSansaAlive = element.isSansaAlive;
      statistic.isAryaAlive = element.isAryaAlive;
      statistic.isBranAlive = element.isBranAlive;
      statistic.isHoundAlive = element.isHoundAlive;
      statistic.isMountainAlive = element.isMountainAlive;
      statistic.isNightKingAlive = element.isNightKingAlive;

      userStatistics.push(statistic);
    });

    return userStatistics;
  }
}