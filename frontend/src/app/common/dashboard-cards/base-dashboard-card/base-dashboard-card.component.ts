import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-base-dashboard-card',
  templateUrl: './base-dashboard-card.component.html',
  styleUrls: ['./base-dashboard-card.component.scss']
})
export class BaseDashboardCardComponent implements OnInit {

  @Input() materialIcon!: string;
  @Input() cardValue$!: Observable<Number>;
  @Input() cardTitle!: string;
  @Input() valueType?: string;
  @Input() footerValue!: Observable<Number>;

  text = this.config.dashboardTitleItems

  constructor(
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
