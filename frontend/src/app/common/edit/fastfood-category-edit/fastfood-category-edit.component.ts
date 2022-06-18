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

@Component({
  selector: 'app-fastfood-category-edit',
  templateUrl: './fastfood-category-edit.component.html',
  styleUrls: ['./fastfood-category-edit.component.scss']
})
export class FastfoodCategoryEditComponent implements OnInit {

  newCategory: CategoryFastfood = new CategoryFastfood();
  category!: CategoryFastfood;

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
        })
    }
  }

  dataChanged(value: string): void {
    let index = this.categoryKeys.indexOf(value)
    this.selected = this.categoryValue[index]
  }

  saveCategory(category: CategoryMenu): void {
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.fastfoodCategoryService.create(category).subscribe(
        response => this.router.navigate(['/', 'category']));
        this.toastr.success(this.messages[1].message, this.messages[1].title);
    } else {
      this.fastfoodCategoryService.update(category).subscribe(
        response => this.router.navigate(['/', 'category']));
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
        this.fastfoodCategoryService.delete(id).subscribe(
          response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/', 'category' ]);
            this.toastr.error(this.messages[0].message, this.messages[0].title);
            }
          )
        )
      }
    });
  }

}
