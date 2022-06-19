import { Menu } from './../../../model/menu';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Food } from 'src/app/model/food';
import { filter, switchMap } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { FoodService } from 'src/app/service/food.service';
import { DeleteDialogComponent } from '../../dialog/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss']
})
export class FoodEditComponent implements OnInit {

  newFood: Food = new Food();
  food!: Food;

  editPageText = this.config.editPageText
  editPageItems = this.config.editPageItems
  foodEditItems = this.config.foodEditItems

  allergensItems = this.config.allergensItems

  foodEditMenuItems = this.config.foodEditMenuItems

  selected!: string
  selectedArray!: string[]

  allergensValue = this.config.allergensItems.map(item => item.key)
  allergensName = this.config.allergensItems.map(item => item.name)

  categoryKeys = this.config.menuCardItems.filter(item => item.key !== 'N').map(item => item.key)
  categoryValue = this.config.menuCardItems.filter(item => item.key !== 'N').map(item => item.name)

  messages = this.config.toastrItems
  weekText = this.config.weekText

  deleteDialog = this.config.dialogItems

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.food = this.newFood
      this.selected = this.setSelected(this.food.menu)
    }
    else {
      this.activatedRoute.params.pipe(
        switchMap( params => this.foodService.getOne(params['id']))
        ).subscribe(food => {
          this.food = food
          this.selected = this.setSelected(food.menu)
          this.menuService.getAll().subscribe(menus => {
            this.setNumberInMenu(food, menus)
          })
        })
    }
  }

  setNumberInMenu(food: Food, menus: Menu[]): void {
  let array: any = []
  let weekArray: any[] = []
  let numberInMenu: number = 0
     menus.map(menu => {
      if (food.menu === 'soup') {
        let filtered = Array(menu[`${food.category}MenuFoodSoup`]).flat().filter(item => item.id === food.id)
          if (Array(menu[`${food.category}MenuFoodSoup`]).flat().includes(filtered[0])) {
            weekArray.push(menu.week)
            array.push(filtered.filter(item => item.id === food.id))
          }
      }
      if (food.menu === 'main_course') {
        let filtered = Array(menu[`${food.category}MenuFoodMain`]).flat().filter(item => item.id === food.id)
        if (Array(menu[`${food.category}MenuFoodMain`]).flat().includes(filtered[0])) {
          weekArray.push(menu.week)
          array.push(filtered.filter(item => item.id === food.id))
        }
      }
      if (food.menu !== 'main_course' && food.menu !== 'soup') {
        let filtered = Array(menu[`${food.category}MenuFood`]).flat().filter(item => item.id === food.id)
        if (Array(menu[`${food.category}MenuFood`]).flat().includes(filtered[0])) {
          weekArray.push(menu.week)
          array.push(filtered.filter(item => item.id === food.id))
        }
      }
    })
    numberInMenu = array.length

    if (numberInMenu !== 0 && food.numberInMenu !== numberInMenu ) {
      food.numberInMenu = numberInMenu
      food.weekOfYear = weekArray
      this.saveFoodParams(food, food.numberInMenu)
    }
  }


  saveFoodParams(food: Food, item: number) {
    food.numberInMenu = item
    this.foodService.update(food).subscribe(
      food => food,
      err => console.error(err))
  }


  dataChanged(value: string) {
    let name = ''
    this.selected!
    this.selectedArray!
    let array = this.foodEditMenuItems.filter(item => item.key === value)
    if (array.length !== 2) {
      name = array[0].title
    }
    if (array.length === 2) {
      this.selectedArray = []
      array.map(item => this.selectedArray.push(item.new))
    }
    this.selected = this.setSelected(name)
  }

  filteredDataChanged(value: string) {
    let name = ''
    this.foodEditMenuItems.filter(item => {
      if (item.new === value) {
        name = item.title
      }
    });
    return name
  }

  setSelected(value: string) {
    let name = ''
    this.foodEditMenuItems.filter(item => {
      if (item.title === value) {
        name = item.new
      }
    });
    return name
  }

  saveFood(food: Food): void {
    food.menu = this.selected
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.foodService.create(food).subscribe(
        response => this.router.navigate(['/', 'menu', 'product']));
        this.toastr.success(this.messages[1].message, this.messages[1].title);
    } else {
      this.foodService.update(food).subscribe(
        response => this.router.navigate(['/', 'menu', 'product']));
        this.toastr.success(this.messages[2].message, this.messages[2].title);
    }
  }

  onDelete(id: number): void {
    const confirmDialog = this.dialog.open(DeleteDialogComponent, {
      data: {
        title: this.deleteDialog[0].title,
        message: this.deleteDialog[0].message,
        ok: this.deleteDialog[0].ok,
        cancel: this.deleteDialog[0].cancel
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.foodService.delete(id).subscribe(
          response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/', 'menu', 'product' ]);
            this.toastr.error(this.messages[0].message, this.messages[0].title);
            }
          )
        )
      }
    });
  }

}
