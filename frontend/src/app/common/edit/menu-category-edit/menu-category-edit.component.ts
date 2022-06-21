import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryMenu } from 'src/app/model/category-menu';
import { ConfigService } from 'src/app/service/config.service';
import { MenuCategoryService } from 'src/app/service/menu-category.service';
import { switchMap } from 'rxjs';
import { DeleteDialogComponent } from '../../dialog/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { OrderMenu } from 'src/app/model/order-menu';
import { MenuService } from 'src/app/service/menu.service';
import { FoodService } from 'src/app/service/food.service';
import { Food } from 'src/app/model/food';
import { MenuOrderService } from 'src/app/service/menu-order.service';

@Component({
  selector: 'app-menu-category-edit',
  templateUrl: './menu-category-edit.component.html',
  styleUrls: ['./menu-category-edit.component.scss']
})
export class MenuCategoryEditComponent implements OnInit {

  newCategory: CategoryMenu = new CategoryMenu();
  category!: CategoryMenu;
  id: string = this.activatedRoute.snapshot.params['id']

  editPageText = this.config.editPageText
  editPageItems = this.config.editPageItems

  allergensItems = this.config.allergensItems

  categoryMenuEditItems = this.config.categoryMenuEditItems

  categoryKeys = this.config.menuCardItems.map(item => item.key)
  categoryValue = this.config.menuCardItems.map(item => item.name)

  categoryLabel = this.config.foodEditItems[2].label
  selected!: string

  notesKeys = this.config.foodItems.filter(item => item.key === 'prime' || item.key === 'option').map(item => item.key)
  notesValue = this.config.foodItems.filter(item => item.key === 'prime' || item.key === 'option').map(item => item.name)

  foodItemKeys = this.config.foodItems.filter(item => this.config.foodItems.indexOf(item) < 7).map(item => item.key)
  foodItemValue = this.config.foodItems.filter(item => this.config.foodItems.indexOf(item) < 7).map(item => item.name)

  weighUnit = this.config.unitItems[2].name
  literUnit = this.config.unitItems[1].name

  messages = this.config.toastrItems

  deleteDialog = this.config.dialogItems

  constructor(
    private activatedRoute: ActivatedRoute,
    private menuCategoryService: MenuCategoryService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private foodService: FoodService,
    private menuOrderService: MenuOrderService
  ) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.category = this.newCategory
    }
    else {
      this.activatedRoute.params.pipe(
        switchMap( params => this.menuCategoryService.getOne(params['id']))
        ).subscribe(category => {
          this.category = category
          this.selected = this.categoryValue[this.categoryKeys.indexOf(category.categoryCode)]
          this.foodService.getAll().subscribe(foods => {
            this.menuOrderService.getAll().subscribe(orders => {
                this.setNumberOfFood(category, foods)
                this.setNumberOfOrder(category, orders)
            })
          })
        })
    }

  }

  setNumberOfFood(category: CategoryMenu, foods: Food[]): void {
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
  }

  saveCategoryFood(category: CategoryMenu, item: number) {
    category.numberOfFood = item
    this.menuCategoryService.update(category).subscribe(
      category => category,
      err => console.error(err))
  }


setNumberOfOrder(category: CategoryMenu, orders: OrderMenu[]): void {
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
  }

  saveCategoryOrder(category: CategoryMenu, item: number, item2: number) {
    category.numberOfOrder = item
    category.numberOfPaidOrder = item2
    this.menuCategoryService.update(category).subscribe(
      category => category,
      err => console.error(err))
  }

  dataChanged(value: string): void {
    let index = this.categoryKeys.indexOf(value)
    this.selected = this.categoryValue[index]
  }

  saveCategory(category: CategoryMenu): void {
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.menuCategoryService.create(category).subscribe(
        response => this.router.navigate(['/', 'menu', 'category']));
        this.toastr.success(this.messages[1].message, this.messages[1].title);
    } else {
      this.menuCategoryService.update(category).subscribe(
        response => this.router.navigate(['/', 'menu', 'category']));
        this.toastr.success(this.messages[2].message, this.messages[2].title);
    }
  }

  onDelete(id: string): void {
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
        this.menuCategoryService.delete(id).subscribe(
          response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/', 'menu', 'category' ]);
            this.toastr.error(this.messages[0].message, this.messages[0].title);
            }
          )
        )
      }
    });
  }

}
