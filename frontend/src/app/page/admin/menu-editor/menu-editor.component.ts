import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/model/food';
import { Menu } from 'src/app/model/menu';
import { ConfigService } from 'src/app/service/config.service';
import { FoodService } from 'src/app/service/food.service';
import { MenuService } from 'src/app/service/menu.service';
import { WeekService } from 'src/app/service/week.service';

@Component({
  selector: 'app-menu-editor',
  templateUrl: './menu-editor.component.html',
  styleUrls: ['./menu-editor.component.scss']
})
export class MenuEditorComponent implements OnInit {

  FoodList$: Observable<Food[]> = this.foodService.getAll()

  menuEditorMenuSelect = this.config.menuEditorMenuSelect
  menuEditorWeekSelect = this.config.menuEditorWeekSelect

  menuSelectArray: string[] = this.config.menuEditorSelectItems.map(item => item.name)
  menuSelectPrimeArray: string[] = this.config.menuEditorSelectItems.filter(item => this.config.menuEditorSelectItems.indexOf(item) < 6).map(item => item.name)
  menuSelectOptionArray: string[] = this.config.menuEditorSelectItems.filter(item => this.config.menuEditorSelectItems.indexOf(item) > 5).map(item => item.name)

  Foods!: Food[]
  SoupFoods?: Food[]

  weekNumber!: number
  weekArray!: number[]
  weekText = this.config.weekText
  year = new Date().getFullYear()

  dayIndex = Array(5).fill(1).map((item, index) => index-1 + 1);

  selectedMenu!: string;
  selectedWeek!: number;

  menu!: Menu[]
  menuVariable = Object.keys(new Menu()).filter(value => value !== "id" && value !== "week")

  menuCardHeaderText = this.config.menuCardHeaderText

  constructor(
    private config: ConfigService,
    public weekService: WeekService,
    private menuService: MenuService,
    private foodService: FoodService
  ) { }

  ngOnInit(): void {
      this.menuService.getAll().subscribe(menus => {
        this.menu = menus
        this.weekArray = Array(this.menu.length - 1).fill(1).map((item, index) => index + 1);
        this.weekArray.unshift(52)
      })
      this.weekNumber = this.weekService.weekNumber
      this.selectedMenu = this.menuSelectArray[0]
      this.selectedWeek = this.weekNumber
      //this.setMenuOfWeek()
  }

  setMenuOfWeek() {
    this.menuService.getAll().subscribe(menus => {
      menus.filter(element => element.id < 33).map(menu => {
        this.foodService.getAll().subscribe(foods => {
          let array = foods.filter(item => item.category === 'A' && item.menu === 'soup')
            //item.fitness === true && item.menu === 'soup')
            //item.category === 'A' && item.menu === 'main_course')
          if (menu.AMenuFoodSoup === [] || menu.AMenuFoodSoup.length !== 5) {
            menu.AMenuFoodSoup = array.sort((a, b) => 0.5 - Math.random()).slice(0, 5)
            this.menuService.update(menu).subscribe(
              category => category,
              err => console.error(err))
          }
        }
          )

      })
    })
  }

  saveFastfoodCategoryOrder(menu: Menu, array: []) {
    menu.AMenuFoodMain = array
    this.menuService.update(menu).subscribe(
      category => category,
      err => console.error(err))
  }

}
