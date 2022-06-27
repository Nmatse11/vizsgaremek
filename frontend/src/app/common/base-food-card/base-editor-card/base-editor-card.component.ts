import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfigService } from 'src/app/service/config.service';
import { FoodService } from 'src/app/service/food.service';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-base-editor-card',
  templateUrl: './base-editor-card.component.html',
  styleUrls: ['./base-editor-card.component.scss']
})
export class BaseEditorCardComponent implements OnInit {

  @Input() Foods?: any[]
  @Input() SoupFoods?: any[]
  @Input() menuName1?: string[];
  @Input() menuName2!: string[];
  @Input() random: boolean = false
  @Input() day!: number
  @Input() selectedMenuKey!: string
  @Input() selectedWeek!: number
  @Input() weekNumber!: number

  menuSelectArray: string[] = this.config.menuCardItems.map(item => item.key)

  editItem1!: boolean
  editItem2!: boolean

  menuFormText: string[] = this.config.menuEditorFormText.map(item => item.name)

  newMenuName1!: string
  newMenuName2!: string

  messages = this.config.toastrItems

  constructor(
    private config: ConfigService,
    private menuService: MenuService,
    private foodService: FoodService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.editItem1 = false
    this.editItem2 = false
  }

  setAllergenText(array: string[]): string {
    return array.join(', ')
  }

  editItem(value: number) {
    this.editItem1 = false
    this.editItem2 = false

    if (value === 1) {
      this.editItem1 = true
    }
    if (value === 2) {
      this.editItem2 = true
    }
  }

  saveItem(day: number, selectedMenuKey: string, selectedWeek: number, newMenuName: string, number: number) {
    this.menuService.getMenu(selectedWeek).subscribe(menu => {
      this.foodService.getAll().subscribe(foods => {
        let selectedFood = foods.filter(food => food.name === newMenuName)
        let notes = selectedFood[0].menu
      if (number === 1) {
        menu[0][`${selectedMenuKey}MenuFoodSoup`][day] = selectedFood[0]
      }
      if (number === 2 && notes === 'main_course') {
        menu[0][`${selectedMenuKey}MenuFoodMain`][day] = selectedFood[0]
      }
      if (number === 2 && notes !== 'main_course') {
        menu[0][`${selectedMenuKey}MenuFood`][day] = selectedFood[0]
      }

      this.menuService.update(menu[0]).subscribe(
        next => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/', 'menu-editor' ]);
          this.toastr.success(this.messages[4].message, this.messages[4].title)}),
        err => console.error(err))
      })
    })
  }


}
