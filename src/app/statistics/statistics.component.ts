import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  isLoading = false;
  chart = [];

  constructor() { }

  ngOnInit() {
    this.loadChart();
  }

  loadChart() {
    let data = {
      datasets: [{
        data: [10, 20, 30],
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)'
        ]
      }],
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
    };

    this.chart = new Chart("canvas", {
      type: 'doughnut',
      data: data
    });
  }

}
