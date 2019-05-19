import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { StatisticsRepository } from './statistics-repository';
import { Facts } from './facts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  isLoading = false;
  chart: Chart;
  characters = [];
  statusCollection = [];
  currentSelectedCharacter = "";
  facts: Facts = new Facts();

  constructor(private repository: StatisticsRepository) { }

  async ngOnInit() {
    document.getElementById("btnLogout").style.display = "none";
    
    this.isLoading = true;
    await this.repository.getStatistics();
    this.facts = this.repository.getFacts();
    this.isLoading = false;
    this.showStatistics();
  }

  private showStatistics() {
    this.characters = this.repository.extractCharacters()

    if (this.characters.length > 0) {
      this.currentSelectedCharacter = this.characters[0];
      this.loadChart();
    }
  }

  loadChart() {
    this.chart = new Chart("canvas", {
      type: 'pie',
      data: this.getDataForChart(),
      options: this.getOptionsForChart()
    });
  }

  getDataForChart() {
    let chartData = this.repository.getDataForCharacter(this.currentSelectedCharacter);

    let data = {
      datasets: [{
        data: chartData,
        backgroundColor: [
          'rgba(12, 168, 116)',
          'rgba(161, 161, 161)',
          'rgba(54, 162, 235)'
        ]
      }],
      labels: [
        'Alive',
        'Dead',
        'WW'
      ],
    };

    return data;
  }

  getOptionsForChart() {
    return {
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            let total = data.datasets[0].data.reduce((accumulator, current) => {
              accumulator += current;

              return accumulator
            }, 0);

            let index = tooltipItem.index;
            let label = data.labels[index];
            let votes = data.datasets[0].data[index];
            let percentage = (votes / total) * 100;

            return `${label}: ${votes} (${percentage.toFixed(0)}%)`
          }
        }
      }
    }
  }

  onCharacterChange(event) {
    this.updateData();
  }

  updateData() {
    let chartData = this.repository.getDataForCharacter(this.currentSelectedCharacter);
    this.chart.data.datasets[0].data = chartData;
    this.chart.update();
  }
}
