
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryMenu } from 'src/app/model/category-menu';
import { Food } from 'src/app/model/food';
import { OrderMenu } from 'src/app/model/order-menu';
import { ConfigService } from 'src/app/service/config.service';
import { FoodService } from 'src/app/service/food.service';
import { MenuCategoryService } from 'src/app/service/menu-category.service';
import { MenuOrderService } from 'src/app/service/menu-order.service';

@Component({
  selector: 'app-menu-cards',
  templateUrl: './menu-cards.component.html',
  styleUrls: ['./menu-cards.component.scss']
})
export class MenuCardsComponent implements OnInit {

  FoodList$: Observable<Food[]> = this.foodService.getAll();
  OrderMenuList$: Observable<OrderMenu[]> = this.orderMenuService.getAll();
  CategoryMenuList$: Observable<CategoryMenu[]> = this.menuCategoryService.getAll();

  materialIcon1: string = "restaurant_menu"
  materialIcon2: string = "shopping_cart";

  menuCodesPrime: string[] = []
  menuCodesPrimeWithoutN: string[] = []
  menuCodesOption: string[] = []

  menuNumberPrime: any[] = []
  menuNumberOption: number[] = []

  menuOrderPrime: any[] = []
  menuOrderOption: number[] = []

  texts = this.config.dashboardCardItems

  cardTitle1 = this.texts[4].title
  cardTitle2 = this.texts[5].title
  valueType = this.texts[4].valueType
  theadTitle1 = this.texts[6].title
  theadTitle2 = this.texts[7].title
  key1: string = 'number'
  key2: string = 'order'

  loading: boolean = false;

  constructor(
    private config: ConfigService,
    private foodService: FoodService,
    private orderMenuService: MenuOrderService,
    private menuCategoryService: MenuCategoryService,
    ) {
      if( this.FoodList$ && this.OrderMenuList$ && this.CategoryMenuList$ ) {
        this.FoodList$.subscribe(foods => {
          this.OrderMenuList$!.subscribe(orders => {
            this.CategoryMenuList$.subscribe(categories => {
              this.setNumberOfFood(categories, foods)
              this.setNumberOfOrder(categories, orders)
              this.setValueOfOrder(categories)
              })
            })
          })
      }
    }

  ngOnInit(): void { }

  setNumberOfFood(categories: CategoryMenu[], foods: Food[]): void {
      categories.map(category => {
      let value = category.categoryCode
      let number = 0
      if (category.menu === 'soup') {
        number = foods.filter(food => food.category === value && food.menu === 'soup').length
      }
      else if (category.menu === 'main_course') {
        number = foods.filter(food => food.category === value && food.menu === 'main_course').length
      } else {
        number = foods.filter(food => food.category === value).length
      }
      if (category.numberOfFood && number !== category.numberOfFood ) {
        this.saveCategoryFood(category, category.numberOfFood)
        this.loading = true
      } else {
        this.loading = true
      }
    })
  }

  saveCategoryFood(category: CategoryMenu, item: number) {
    category.numberOfFood = item
    this.menuCategoryService.update(category).subscribe(
      category => category,
      err => console.error(err))
  }


 setNumberOfOrder(categories: CategoryMenu[], orders: OrderMenu[]): void {
      categories.map(category => {
      let value = category.categoryCode
      let array: any = []
      let number = 0
      orders.map(order => order.order.map(or => or.menuCode)).filter(item => {
          if (item.includes(value)) {
            array.push(item)}
        })
      number = Array.from(array).flat().filter(i => i === value).length
      if (category.numberOfOrder && number !== category.numberOfOrder ) {
        this.saveCategoryOrder(category, category.numberOfOrder)
        this.loading = true
      } else {
        this.loading = true
      }
    })
   }

  saveCategoryOrder(category: CategoryMenu, item: number) {
    category.numberOfOrder = item
    this.menuCategoryService.update(category).subscribe(
      category => category,
      err => console.error(err))
      this.loading = true
  }

  setValueOfOrder(categories: CategoryMenu[]) {
    this.menuCodesPrime = [... new Set(categories.filter(category => category.notes === 'prime').map(cat => cat.categoryCode))]
    this.menuCodesPrimeWithoutN = this.menuCodesPrime.filter(codes => codes !== 'N')
    this.menuCodesOption = [... new Set(categories.filter(category => category.notes === 'option').map(cat => cat.categoryCode))]
    let elements1 = categories.filter(category => category.notes === 'prime')
    this.menuCodesPrimeWithoutN.map(item => {
      let value = item
      let number = elements1.filter(element => element.categoryCode === value)
      .map(el => el.numberOfFood).reduce((prev, next) => (prev as number) + (next as number), 0)
      this.menuNumberPrime.push(number)
    })
    this.menuCodesPrime.map(item => {
      let value = item
      let order = elements1.filter(element => element.categoryCode === value)
      .map(el => el.numberOfOrder)[0]
      this.menuOrderPrime.push(order)
    })
    let elements2 = categories.filter(category => category.notes === 'option')
    this.menuCodesOption.map(item => {
      let value = item
      let number = elements2.filter(element => element.categoryCode === value)
      .map(el => el.numberOfFood)[0]
      this.menuNumberOption.push(number as number)
      let order = elements2.filter(element => element.categoryCode === value)
      .map(el => el.numberOfOrder)[0]
      this.menuOrderOption.push(order as number)
    })
  }

}
