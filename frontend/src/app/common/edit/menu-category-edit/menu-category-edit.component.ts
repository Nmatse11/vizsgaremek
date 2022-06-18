import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryMenu } from 'src/app/model/category-menu';
import { ConfigService } from 'src/app/service/config.service';
import { MenuCategoryService } from 'src/app/service/menu-category.service';
import { switchMap } from 'rxjs';
import { DeleteDialogComponent } from '../../dialog/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-category-edit',
  templateUrl: './menu-category-edit.component.html',
  styleUrls: ['./menu-category-edit.component.scss']
})
export class MenuCategoryEditComponent implements OnInit {

  newCategory: CategoryMenu = new CategoryMenu();
  category!: CategoryMenu;

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
        })
    }
  }

  dataChanged(value: string): void {
    let index = this.categoryKeys.indexOf(value)
    this.selected = this.categoryValue[index]
  }

  saveCategory(category: CategoryMenu): void {
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.menuCategoryService.create(category).subscribe(
        response => this.router.navigate(['/', 'category']));
        this.toastr.success(this.messages[1].message, this.messages[1].title);
    } else {
      this.menuCategoryService.update(category).subscribe(
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
        this.menuCategoryService.delete(id).subscribe(
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
