import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 70, 80, 90, 60], label: 'Series A' },
    { data: [90, 100, 80, 60], label: 'Series B' },
    { data: [100, 100, 80, 100], label: 'Series C' },
    { data: [80, 100, 100], label: 'Series D' },
    { data: [100, 90], label: 'Series E' },
    { data: [90, 100, 70, 60], label: 'Series F' },
  ];
  public lineChartLabels: Label[] = ['Languages', 'Database', 'Front-End', 'Tools', 'CMS', 'Framework'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'radar';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

  // public barChartData: ChartDataSets[] = [
  //   { data: [65, 70, 80, 90, 60], label: 'Series A' },
  //   { data: [90, 100, 80, 60], label: 'Series B' },
  //   { data: [100, 100, 80, 100], label: 'Series C' },
  //   { data: [80, 100, 100], label: 'Series D' },
  //   { data: [100, 90], label: 'Series E' },
  //   { data: [90, 100, 70, 60], label: 'Series F' },
  // ];

  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // public barChartLabels: Label[] = ['Languages', 'Database', 'Front-End', 'Tools', 'CMS', 'Framework'];
  // public barChartType: ChartType = 'bar';
  // public barChartLegend = true;
  // public barChartPlugins = [];

  // constructor() { }

  // ngOnInit() {
  // }
}
