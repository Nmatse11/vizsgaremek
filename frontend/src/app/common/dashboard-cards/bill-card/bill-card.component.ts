import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BillService } from 'src/app/service/bill.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  texts = this.config.dashboardCardItems

  materialIcon: string = "storage";
  dontPaidBillAmount$:  Observable<Number> = this.billService.getSumValue('status', 'new', 'amount')
  cardTitle: string = this.texts[3].title
  allOfBillAmount$: Observable<Number> = this.billService.getSum('amount')

  constructor(
    private billService: BillService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
