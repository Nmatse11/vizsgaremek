import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { FastfoodOrderService } from 'src/app/service/fastfood-order.service';

@Component({
  selector: 'app-order-fastfood-card',
  templateUrl: './order-fastfood-card.component.html',
  styleUrls: ['./order-fastfood-card.component.scss']
})
export class OrderFastfoodCardComponent implements OnInit {

  texts = this.config.dashboardCardItems

  materialIcon: string = "shopping_cart";
  @Input() dontPaidOrderNumber$!:  Observable<Number>
  @Input() allOfOrderNumber$!:  Observable<Number>
  cardTitle: string = this.texts[2].title
  valueType = this.texts[2].valueType

  constructor(
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
