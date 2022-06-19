import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryMenu } from 'src/app/model/category-menu';
import { Food } from 'src/app/model/food';
import { OrderMenu } from 'src/app/model/order-menu';
import { ConfigService } from 'src/app/service/config.service';
import { MenuCategoryService } from 'src/app/service/menu-category.service';

@Component({
  selector: 'app-menu-cards',
  templateUrl: './menu-cards.component.html',
  styleUrls: ['./menu-cards.component.scss']
})
export class MenuCardsComponent implements OnInit {

  @Input() FoodList$!: Observable<Food[]>
  @Input() OrderMenuList$!: Observable<OrderMenu[]>
  @Input() CategoryMenuList$!: Observable<CategoryMenu[]>

  materialIcon1: string = "restaurant_menu"
  materialIcon2: string = "shopping_cart";
  materialIcon3: string = "add_business";

  menuCodesPrime: string[] = []
  menuCodesPrimeWithoutN: string[] = []
  menuCodesOption: string[] = []

  menuNumberPrime: number[] = []
  sumOfNumberPrime: number = 0
  menuNumberOption: number[] = []
  sumOfNumberOption: number = 0

  menuOrderPrime: number[] = []
  sumOfOrderPrime: number = 0
  menuOrderOption: number[] = []
  sumOfOrderOption: number = 0

  menuAmountPrime: number[] = []
  sumOfAmountPrime: number = 0
  menuAmountOption: number[] = []
  sumOfAmountOption: number = 0

  texts = this.config.dashboardCardItems

  cardTitle1 = this.texts[4].title
  cardTitle2 = this.texts[5].title
  cardTitle3 = this.texts[8].title
  valueType = this.texts[4].valueType
  theadTitle1 = this.texts[6].title
  theadTitle2 = this.texts[7].title
  theadTitle3 = this.texts[9].title

  loading: boolean = false;

  type: string = 'amount'

  constructor(
    private config: ConfigService,
    private menuCategoryService: MenuCategoryService,
    ) { }

    ngOnInit(): void {
    if( this.FoodList$ && this.OrderMenuList$ && this.CategoryMenuList$ ) {
      this.FoodList$.subscribe(foods => {
        this.OrderMenuList$!.subscribe(orders => {
          this.CategoryMenuList$.subscribe(categories => {
                this.setNumberOfFood(categories, foods)
                this.setNumberOfOrder(categories, orders)
                this.setValueOfStat(categories)
                this.loading = true
            })
          })
        })
      }
    }


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
      if (number!== 0 && category.numberOfFood !== number ) {
        category.numberOfFood = number
        this.saveCategoryFood(category, category.numberOfFood)
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
      let array: any = []
      let arrayPaid: any = []
      let number = 0
      let paidNumber = 0
      orders.map(order => order.order.map(or => {
        if (or.menuCode === category.categoryCode) {
          for (let i = 0; i < or.portion; i++) {
            array.push(or.menuCode)
          }
        }
      }))
      number = array.length

      orders.filter(order => order.status === 'paid').map(order => order.order.map(or => {
        if (or.menuCode === category.categoryCode) {
          for (let i = 0; i < or.portion; i++) {
            arrayPaid.push(or.menuCode)
          }
        }
      }))
      paidNumber = arrayPaid.length

      if (number !== 0 && category.numberOfOrder !== number || paidNumber !== 0 && category.numberOfPaidOrder !== paidNumber ) {
        category.numberOfOrder = number
        category.numberOfPaidOrder = paidNumber
        this.saveCategoryOrder(category, category.numberOfOrder, category.numberOfPaidOrder)
      }
    })
   }

  saveCategoryOrder(category: CategoryMenu, item: number, item2: number) {
    category.numberOfOrder = item
    category.numberOfPaidOrder = item2
    this.menuCategoryService.update(category).subscribe(
      category => category,
      err => console.error(err))
  }

  setValueOfStat(categories: CategoryMenu[]) {
    this.menuCodesPrime = [... new Set(categories
      .filter(category => category.notes === 'prime')
      .map(cat => cat.categoryCode))]
    this.menuCodesPrimeWithoutN = this.menuCodesPrime
      .filter(codes => codes !== 'N')
    this.menuCodesOption = [... new Set(categories
      .filter(category => category.notes === 'option')
      .map(cat => cat.categoryCode))]

    let elements1 = categories.filter(category => category.notes === 'prime')
    let elements2 = categories.filter(category => category.notes === 'option')

    this.menuCodesPrimeWithoutN.map(item => {
      let number = elements1.filter(element => element.categoryCode === item)
      .map(el => el.numberOfFood).reduce((prev, next) => (prev as number) + (next as number), 0)
      this.menuNumberPrime.push(number as number)
    })
    this.sumOfNumberPrime = this.menuNumberPrime.reduce((prev, next) => prev + next, 0)

    this.menuCodesPrime.map(item => {
      let order = elements1.filter(element => element.categoryCode === item)
      .map(el => el.numberOfOrder)[0]
      this.menuOrderPrime.push(order as number)
      let amount = elements1.filter(element => element.categoryCode === item)
      .map(el => (el.numberOfPaidOrder as number) * el.price * 5).reduce((prev, next) => (prev as number) + (next as number), 0)
      this.menuAmountPrime.push(amount as number)
    })
    this.sumOfOrderPrime = this.menuOrderPrime.reduce((prev, next) => prev + next, 0)
    this.sumOfAmountPrime = this.menuAmountPrime.reduce((prev, next) => prev + next, 0)

    this.menuCodesOption.map(item => {
      let number = elements2.filter(element => element.categoryCode === item)
      .map(el => el.numberOfFood)[0]
      this.menuNumberOption.push(number as number)

      let order = elements2.filter(element => element.categoryCode === item)
      .map(el => el.numberOfOrder)[0]
      this.menuOrderOption.push(order as number)

      let amount = elements2.filter(element => element.categoryCode === item)
      .map(el => (el.numberOfPaidOrder as number) * el.price * 5).reduce((prev, next) => (prev as number) + (next as number), 0)
      this.menuAmountOption.push(amount as number)
    })
    this.sumOfNumberOption = this.menuNumberOption.reduce((prev, next) => prev + next, 0)
    this.sumOfOrderOption = this.menuOrderOption.reduce((prev, next) => prev + next, 0)
    this.sumOfAmountOption = this.menuAmountOption.reduce((prev, next) => prev + next, 0)
  }

}
