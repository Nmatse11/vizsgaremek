import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { FoodService } from 'src/app/service/food.service';
import { MenuCategoryService } from 'src/app/service/menu-category.service';
import { MenuOrderService } from 'src/app/service/menu-order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  titles = this.config.dashboardTitleItems

  constructor(
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
