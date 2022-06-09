import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() labels!: string[]
  @Input() dataName!: string[]
  @Input() dataArray1!: number[]
  @Input() dataArray2!: number[]

  shiftLabel!: string[]
  shiftDataArray1!: number[]
  shiftDataArray2!: number[]

  constructor( ) { }

  ngOnInit(): void {
    if (this.labels[0] === "Szeged") {
      this.shiftLabel = this.labels.filter(item => item !== this.labels[0])
      this.shiftDataArray1 = this.dataArray1.filter(item => item !== this.dataArray1[0])
      this.shiftDataArray2 = this.dataArray2.filter(item => item !== this.dataArray2[0])
      this.barChartData.labels = this.shiftLabel
      this.barChartData.datasets[0].data = this.shiftDataArray1
      this.barChartData.datasets[1].data = this.shiftDataArray2
    } else {
      this.barChartData.labels = this.labels
      this.barChartData.datasets[0].data = this.dataArray1
      this.barChartData.datasets[1].data = this.dataArray2
    }
      this.barChartData.datasets[0].label = this.dataName[0]
      this.barChartData.datasets[1].label = this.dataName[1]
      this.chart?.update();
  }

  barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      }
      },
  };
  barChartData: ChartData<'bar', number[], string | string[]> = {
    labels: this.labels,
    datasets: [ {
      data: this.dataArray1,
      backgroundColor: [ '#343a40' ],
      hoverBackgroundColor: [ '#343a40' ],
      hoverBorderColor: [ '#343a40' ]
    },
    {
      data: this.dataArray2,
      backgroundColor: [ '#A9A9A9' ],
      hoverBackgroundColor: [ '#A9A9A9' ],
      hoverBorderColor: [ '#A9A9A9' ]
    }
  ]
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins  = [ DatalabelsPlugin ];

}
