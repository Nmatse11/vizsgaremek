import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryMenu } from 'src/app/model/category-menu';
import { ConfigService } from 'src/app/service/config.service';
import { switchMap } from 'rxjs';
import { DeleteDialogComponent } from '../../dialog/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CategoryFastfood } from 'src/app/model/category-fastfood';
import { FastfoodCategoryService } from 'src/app/service/fastfood-category.service';
import { FastfoodService } from 'src/app/service/fastfood.service';
import { FastfoodOrderService } from 'src/app/service/fastfood-order.service';
import { Fastfood } from 'src/app/model/fastfood';
import { OrderFastfood } from 'src/app/model/order-fastfood';

@Component({
  selector: 'app-fastfood-category-edit',
  templateUrl: './fastfood-category-edit.component.html',
  styleUrls: ['./fastfood-category-edit.component.scss']
})
export class FastfoodCategoryEditComponent implements OnInit {

  newCategory: CategoryFastfood = new CategoryFastfood();
  category!: CategoryFastfood;
  id: string = this.activatedRoute.snapshot.params['id']

  editPageText = this.config.editPageText
  editPageItems = this.config.editPageItems

  allergensItems = this.config.allergensItems

  categoryFastfoodEditItems = this.config.categoryFastfoodEditItems

  categoryKeys = this.config.dashboardTdCardItems.filter(item => this.config.dashboardTdCardItems.indexOf(item) > 12 && this.config.dashboardTdCardItems.indexOf(item) < 23  ).map(item => item.key)
  categoryValue = this.config.dashboardTdCardItems.filter(item => this.config.dashboardTdCardItems.indexOf(item) > 12 && this.config.dashboardTdCardItems.indexOf(item) < 23  ).map(item => item.title)

  categoryLabel = this.config.foodEditItems[2].label
  selected!: string

  notesKeys = this.config.foodItems.filter(item => item.key === 'primary' || item.key === 'secondary').map(item => item.key)
  notesValue = this.config.foodItems.filter(item => item.key === 'primary' || item.key === 'secondary').map(item => item.name)

  fastfoodItemKeys = this.config.fastfoodEditMenuItems.map(item => item.title)
  fastfoodItemValue = this.config.fastfoodEditMenuItems.map(item => item.new)

  messages = this.config.toastrItems

  deleteDialog = this.config.dialogItems

  sizeUnit = this.config.unitItems[0].name

  constructor(
    private activatedRoute: ActivatedRoute,
    private fastfoodCategoryService: FastfoodCategoryService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private fastfoodService: FastfoodService
  ) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.category = this.newCategory
    }
    else {
      this.activatedRoute.params.pipe(
        switchMap( params => this.fastfoodCategoryService.getOne(params['id']))
        ).subscribe(category => {
          this.category = category
          this.selected = this.categoryValue[this.categoryKeys.indexOf(category.categoryCode)]
          this.fastfoodService.getAll().subscribe(fastfoods => {
              this.setNumberOfFastfood(category, fastfoods)
              this.setFastfoodCategoryOrder(category, fastfoods)
          })
        })
    }
  }

  setNumberOfFastfood(category: CategoryFastfood, fastfoods: Fastfood[]): void {
    let number = 0
    number = fastfoods.filter(fastfood => fastfood.category === category.categoryCode).length

    if (number !== 0 && category.numberOfFood !== number ) {
      category.numberOfFood = number
      this.saveCategoryFastfood(category, category.numberOfFood)
    }
  }

  saveCategoryFastfood(category: CategoryFastfood, item: number) {
    category.numberOfFood = item
    this.fastfoodCategoryService.update(category).subscribe(
      category => category,
      err => console.error(err))
  }

  setFastfoodCategoryOrder(category: CategoryFastfood, fastfoods: Fastfood[]) {
      let arrayOrder: any[] = []
      let numberSum = 0

      fastfoods.map(fastfood => {
        if (fastfood.category !== "PIZ") {
          if (fastfood.category === category.categoryCode) {
                arrayOrder.push(fastfood.numberOfOrder)
          }
        }

        if (fastfood.category === "PIZ") {
          if (fastfood.category === category.categoryCode) {
              arrayOrder.push(fastfood.numberOfOrder)
              arrayOrder.push(fastfood.numberOfOrderFamily)
          }
        }
      })
      numberSum = arrayOrder.reduce((prev, next) => (prev as number) + (next as number), 0)

        if (numberSum !== 0 && category.sumOfOrder !== numberSum ) {
          category.sumOfOrder = numberSum
          this.saveFastfoodCategoryOrder(category, category.sumOfOrder)
        }

  }

  saveFastfoodCategoryOrder(category: CategoryFastfood, item: number) {
    category.sumOfOrder = item
    this.fastfoodCategoryService.update(category).subscribe(
      category => category,
      err => console.error(err))
  }

  dataChanged(value: string): void {
    let index = this.categoryKeys.indexOf(value)
    this.selected = this.categoryValue[index]
  }

  saveCategory(category: CategoryMenu): void {
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.fastfoodCategoryService.create(category).subscribe(
        response => this.router.navigate(['/', 'fastfood', 'category']));
        this.toastr.success(this.messages[1].message, this.messages[1].title);
    } else {
      this.fastfoodCategoryService.update(category).subscribe(
        response => this.router.navigate(['/', 'fastfood', 'category']));
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
        this.fastfoodCategoryService.delete(id).subscribe(
          response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/', 'fastfood', 'category' ]);
            this.toastr.error(this.messages[0].message, this.messages[0].title);
            }
          )
        )
      }
    });
  }

}
