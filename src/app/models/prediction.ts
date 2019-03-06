export class Prediction {
  name: string;
  status: string;
  statusOptions: Array<Status>;

  constructor(name: string, status: string) {
    this.name = name;
    this.status = status;
    this.statusOptions = [];

    this.generateStatusOptions();
  }

  private generateStatusOptions() {
    this.statusOptions = [
      { "name": "Alive", "isActive": this.status == "Alive" },
      { "name": "Dead", "isActive": this.status == "Dead" },
      { "name": "White Walker", "isActive": this.status == "White Walker" }
    ]
  }
}

class Status {
  name: string;
  isActive: boolean;
}