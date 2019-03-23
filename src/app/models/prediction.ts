import { environment } from "src/environments/environment";

export class Prediction {
  name: string;
  statusPrediction: string;
  statusInShow: string;
  image: string;
  statusOptions: Array<Status>;

  constructor(name: string, statusPrediction: string, statusInShow: string, image: string) {
    this.name = name;
    this.statusPrediction = statusPrediction;
    this.statusInShow = statusInShow;
    this.statusOptions = [];
    this.image = environment.url + image

    this.generateStatusOptions();
  }

  private generateStatusOptions() {
    this.statusOptions = [
      { "name": "Alive", "isActive": this.statusPrediction == "Alive" },
      { "name": "Dead", "isActive": this.statusPrediction == "Dead" },
      { "name": "White Walker", "isActive": this.statusPrediction == "White Walker" }
    ]
  }
}

class Status {
  name: string;
  isActive: boolean;
}