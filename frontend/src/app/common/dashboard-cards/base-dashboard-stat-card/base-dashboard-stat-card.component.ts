import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryMenu } from 'src/app/model/category-menu';
import { Food } from 'src/app/model/food';
import { OrderMenu } from 'src/app/model/order-menu';
import { ConfigService } from 'src/app/service/config.service';
import { FoodService } from 'src/app/service/food.service';
import { MenuCategoryService } from 'src/app/service/menu-category.service';
import { MenuOrderService } from 'src/app/service/menu-order.service';

@Component({
  selector: 'app-base-dashboard-stat-card',
  templateUrl: './base-dashboard-stat-card.component.html',
  styleUrls: ['./base-dashboard-stat-card.component.scss']
})
export class BaseDashboardStatCardComponent implements OnInit {

  @Input() materialIcon!: string;
  @Input() cardTitle!: string;
  @Input() valueType?: string;
  @Input() theadTitle1!: string;
  @Input() theadTitle2!: string
  @Input() menuCodes: string[] = [];
  @Input() menuNumber: number[] = [];
  @Input() sumOfValue: number = 0
  @Input() type?: string

  columnsArray: string[] = []

  texts = this.config.dashboardTdCardItems

  tfootText = this.config.dashboardCardItems[10].title

  constructor(
    private config: ConfigService
    ) {
  }

  ngOnInit(): void { }

  setMenuText(value: string): string {
    let number = ''
    this.texts.filter(item => {
      if (item.key === value) {
        number = item.title
      }
    });
    return number
  }

}
