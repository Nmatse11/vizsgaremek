import { Component, OnInit } from '@angular/core';
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
  dontPaidOrderNumber$:  Observable<Number> = this.menuOrderService.getNumberOfValue('status', 'new')
  allOfOrderNumber$:  Observable<Number> = this.menuOrderService.getNumberOf()
  cardTitle: string = this.texts[1].title
  valueType = this.texts[1].valueType

  constructor(
    private menuOrderService: MenuOrderService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
