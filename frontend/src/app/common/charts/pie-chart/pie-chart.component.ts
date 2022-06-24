import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() labels!: string[]
  @Input() dataArray: any[] = []
  @Input() valueType!: string

  constructor( ) { }

  ngOnInit(): void {
    console.log(this.dataArray)
      this.pieChartData.labels = this.labels
      this.pieChartData.datasets[0].data = this.dataArray
      this.chart?.update();
  }

  pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      datalabels: {
        color: '#636f7a',
        display: true,
        font: {
          weight: 'bold',
          size: 14,
        },
        formatter: function(value, context) {
          return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }
        },
      },
  };
  pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: this.labels,
    datasets: [ {
      data: this.dataArray,
      backgroundColor: [ '#343a40','#A9A9A9' ],
      hoverBackgroundColor: ['#343a40', '#A9A9A9' ],
      hoverBorderColor: [ '#343a40', '#A9A9A9' ]
    } ]
  };
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [ DatalabelsPlugin ];

}
