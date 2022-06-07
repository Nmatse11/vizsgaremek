import { Component, OnInit } from '@angular/core';
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
  dontPaidOrderNumber$:  Observable<Number> = this.fastfoodOrderService.getNumberOfValueReserve('status', 'paid')
  allOfOrderNumber$:  Observable<Number> = this.fastfoodOrderService.getNumberOf()
  cardTitle: string = this.texts[2].title
  valueType = this.texts[2].valueType

  constructor(
    private fastfoodOrderService: FastfoodOrderService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
