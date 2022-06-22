import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/model/food';
import { Menu } from 'src/app/model/menu';
import { ConfigService } from 'src/app/service/config.service';
import { FoodService } from 'src/app/service/food.service';
import { MenuService } from 'src/app/service/menu.service';
import { WeekService } from 'src/app/service/week.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu-editor',
  templateUrl: './menu-editor.component.html',
  styleUrls: ['./menu-editor.component.scss']
})
export class MenuEditorComponent implements OnInit {

  FoodList$: Observable<Food[]> = this.foodService.getAll()

  menuEditorMenuSelect = this.config.menuEditorMenuSelect
  menuEditorWeekSelect = this.config.menuEditorWeekSelect

  menuSelectArrayKey: string[] = this.config.menuEditorSelectItems.map(item => item.key)
  menuSelectArrayName: string[] = this.config.menuEditorSelectItems.map(item => item.name)
  menuSelectPrimeArray: string[] = this.config.menuEditorSelectItems.filter(item => this.config.menuEditorSelectItems.indexOf(item) < 6).map(item => item.key)
  menuSelectOptionArray: string[] = this.config.menuEditorSelectItems.filter(item => this.config.menuEditorSelectItems.indexOf(item) > 5).map(item => item.key)

  Foods!: Food[]
  SoupFoods?: Food[]

  weekNumber!: number
  weekArray!: number[]
  weekText = this.config.weekText

  dayIndex = Array(5).fill(1).map((item, index) => index-1 + 1);

  selectedMenuKey!: string;
  selectedWeek!: number;

  menu!: Menu[]
  menuVariable = Object.keys(new Menu()).filter(value => value !== "_id" && value !== "week")

  menuCardHeaderText = this.config.menuCardHeaderText
  generationText = this.config.generationText
  generationButtonText = this.config.generationButtonText
  editPageText = this.config.editPageText
  menuSaveButtonText = this.config.menuSaveButtonText

  randomMenu!: Menu

  messages = this.config.toastrItems

  cancel = false

  constructor(
    private config: ConfigService,
    public weekService: WeekService,
    private menuService: MenuService,
    private foodService: FoodService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
      this.menuService.getAll().subscribe(menus => {
        this.menu = menus
        this.weekArray = Array(this.menu.length - 1).fill(1).map((item, index) => index + 1);
        this.weekArray.unshift(0)
      })
      if (new Date().getDay() !== 6 || new Date().getDay() !== 0) {
        this.weekNumber = this.weekService.weekNumber
      }
      if (new Date().getDay() === 6 || new Date().getDay() === 0) {
        this.weekNumber = this.weekService.weekNumber + 1
      }
      this.selectedMenuKey = this.menuSelectArrayKey[0]
      this.selectedWeek = this.weekNumber
  }

  customDateFormats(date: Date): string {
    return date.toLocaleDateString('hu', { month: '2-digit', day: '2-digit', })
  }

  getYear(date: Date): boolean {
    return date.getFullYear() === new Date().getFullYear()
  }

  setMenuOfWeek(menuKey: string) {
    this.cancel = false
      this.foodService.getAll().subscribe(foods => {
        this.randomMenu = new Menu()

      if (this.menuSelectPrimeArray.indexOf(menuKey) !== -1) {
        if (menuKey !== 'F') {
          this.randomMenu[`${menuKey}MenuFoodSoup`] = foods.filter(item => item.category === menuKey && item.menu === 'soup').sort((a, b) => 0.5 - Math.random()).slice(0, 5)
          this.randomMenu[`${menuKey}MenuFoodMain`] = foods.filter(item => item.category === menuKey && item.menu === 'main_course').sort((a, b) => 0.5 - Math.random()).slice(0, 5)
        }
        if (menuKey === 'F') {
          this.randomMenu[`${menuKey}MenuFoodSoup`] = foods.filter(item => item.fitness === true && item.menu === 'soup').sort((a, b) => 0.5 - Math.random()).slice(0, 5)
          this.randomMenu[`${menuKey}MenuFoodMain`] = foods.filter(item => item.category === menuKey && item.menu === 'main_course').sort((a, b) => 0.5 - Math.random()).slice(0, 5)
        }
      }
      if (this.menuSelectOptionArray.indexOf(menuKey) !== -1) {
          this.randomMenu[`${menuKey}MenuFood`] = foods.filter(item => item.category === menuKey).sort((a, b) => 0.5 - Math.random()).slice(0, 5)
      }
    })
  }

  saveMenu(week: number, menuKey: string) {
     this.menuService.getMenu(week).subscribe(menu => {
      if (this.menuSelectPrimeArray.indexOf(menuKey) !== -1) {
        menu[0][`${menuKey}MenuFoodSoup`] = this.randomMenu[`${menuKey}MenuFoodSoup`]
        menu[0][`${menuKey}MenuFoodMain`] = this.randomMenu[`${menuKey}MenuFoodMain`]
      }
      if (this.menuSelectOptionArray.indexOf(menuKey) !== -1) {
        menu[0][`${menuKey}MenuFood`] = this.randomMenu[`${menuKey}MenuFood`]
      }

      this.menuService.update(menu[0]).subscribe(
        menu => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/', 'menu-editor' ]);
          this.toastr.success(this.messages[4].message, this.messages[4].title)}),
        err => console.error(err))
      })
  }

  cancelRandomMenu() {
    this.randomMenu = new Menu()
    this.cancel = true
  }

}
