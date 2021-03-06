import { MenuCategoryService } from 'src/app/service/menu-category.service';
import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/model/food';
import { Menu } from 'src/app/model/menu';
import { ConfigService } from 'src/app/service/config.service';
import { FoodService } from 'src/app/service/food.service';
import { MenuService } from 'src/app/service/menu.service';
import { WeekService } from 'src/app/service/week.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderDialogComponent } from 'src/app/common/dialog/order-dialog/order-dialog.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  weekNumber: number = 0
  week: number = 0
  weekText = this.config.weekText

  menus$ = this.menuService.getAll()

  dayIndex = Array(5).fill(1).map((item, index) => index-1 + 1);

  iMenuItem: Food[] = []

  menuCardText = this.config.menuCardItems
  menuCardHeaderText = this.config.menuCardHeaderText

  priceOfDayText = this.config.priceOfDayText
  priceOfWeekText = this.config.priceOfWeekText

  unit = this.config.unitItems

  priceArray: number[] = []
  weightArray: number[] = []
  weightSoupArray: number[] = []

  numberOfPrime!: number
  numberOfOption!: number

  primeIndex!: number[]
  optionIndex!: number[]

  menuVariable = Object.keys(new Menu()).filter(value => value !== "_id" && value !== "week")

  menuPrimeButton = this.config.menuPrimeButtonText
  menuOptionButton = this.config.menuOptionButtonText
  menuDrinkButton = this.config.menuDrinkButtonText

  buttonBoolean = [true, false, false]

  orderDialog = this.config.orderDialogItems
  orderMenuDialog = this.config.orderMenuDialog.map(item => item.name)

  constructor(
    public weekService: WeekService,
    private config: ConfigService,
    private menuService: MenuService,
    private foodService: FoodService,
    private menuCategoryService: MenuCategoryService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getIMenuItem()
    this.setPriceOfMenu()
    if (new Date().getDay() !== 6 || new Date().getDay() !== 0) {
      this.weekNumber = this.weekService.weekNumber
      this.week = this.weekNumber
    }
    if (new Date().getDay() === 6 || new Date().getDay() === 0) {
      this.weekNumber = this.weekService.weekNumber + 1
      this.week = this.weekNumber
    }
  }

  saveMenu(menu: Menu, item: Food[]) {
    menu.DMenuFood = item
    this.menuService.update(menu).subscribe(
      menu => menu,
      err => console.error(err))
  }

  getIMenuItem() {
    this.foodService.getAll().subscribe(foods => {
      this.iMenuItem = foods
      .filter((item) => item.category === 'I')
    })
  }

  weekButton(value: number) {
    this.buttonBoolean = [false, false, false]
    this.buttonBoolean[value]= true
    this.week = value + this.weekNumber
  }

  weekButtonMobil(value: number) {
    this.buttonBoolean = [false, false, false]
    this.week = value + this.weekNumber
  }

  setPriceOfMenu(): void {
    let price = 0
    let array = this.menuCardText.map(item => item.key)
    let keyarray = [... new Set(array)]

    keyarray.map(code => {
    this.menuCategoryService.getAll().subscribe(
    categories => {
      let cat = categories.filter(item => item.categoryCode === code)

      if (cat.length !== 1) {
        price = cat.map(item => item.price).reduce((prev, next) => (prev as number) + (next as number), 0)
      }
      if (cat.length === 1) {
        price = cat[0].price
      }

      this.priceArray.push(price)

      this.numberOfPrime = categories.filter(item => item.notes === 'prime' && item.menu !== 'soup').length
      this.numberOfOption = categories.filter(item => item.notes === 'option').length - 1
      this.primeIndex = Array(this.numberOfPrime).fill(1).map((item, index) => index - 1 + 1);
      this.optionIndex = Array(this.numberOfOption).fill(1).map((item, index) => index - 1 + 1);

      let catSoup = categories.filter(item => item.notes === 'prime' && item.menu === 'soup')
      let catNotSoup = categories.filter(item => item.menu !== 'soup')

      catSoup.filter(item => item.categoryCode === code).map(item => this.weightSoupArray.push(item.weigh as number))
      catNotSoup.filter(item => item.categoryCode === code).map(item => this.weightArray.push(item.weigh as number))
      this.weightSoupArray.push(400)
      })
    })
  }

  setAllergensString(array: string[]): string {
    return array.join(', ')
  }

  scroll(id: string) {
    let el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  }

  customDateFormats(date: Date): string {
    return date.toLocaleDateString('hu', { month: '2-digit', day: '2-digit', })
  }

  onOrderInformation(): void {
    const confirmDialog = this.dialog.open(OrderDialogComponent, {
      data: {
        title: this.orderDialog[0].title,
        message: this.orderMenuDialog,
        ok: this.orderDialog[0].ok,
        cancel: this.orderDialog[0].cancel
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
      }
    });
  }

}
