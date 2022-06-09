import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { MenuOrderService } from 'src/app/service/menu-order.service';

@Component({
  selector: 'app-order-menu-card',
  templateUrl: './order-menu-card.component.html',
  styleUrls: ['./order-menu-card.component.scss']
})
export class OrderMenuCardComponent implements OnInit {

  texts = this.config.dashboardCardItems

  materialIcon: string = "shopping_cart";
  @Input() dontPaidOrderNumber$!:  Observable<Number>
  @Input() allOfOrderNumber$!:  Observable<Number>
  cardTitle: string = this.texts[1].title
  valueType = this.texts[1].valueType

  constructor(
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
