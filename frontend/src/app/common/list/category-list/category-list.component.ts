import { MenuCategoryService } from '../../../service/menu-category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { Router } from '@angular/router';
import { FastfoodCategoryService } from 'src/app/service/fastfood-category.service';
import { ToastrService } from 'ngx-toastr';
import { BoundElementProperty } from '@angular/compiler';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  List$: Observable<any[]> = this.menuCategoryService.getAll();
  columns = this.config.foodCategoryMenuItems;
  componentName: string = 'category';
  categoryName: string = 'menu-category'

  buttons = this.config.tableItems

  currencyPipeOn: string = 'price';

  messages = this.config.toastrItems

  buttonClick: boolean  = false
  buttonValue: string = 'menu'

  constructor(
    private menuCategoryService: MenuCategoryService,
    private fastfoodCategoryService: FastfoodCategoryService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit( ): void { }

  setCategoryList(type: string): void {
    if (type === 'menu') {
      this.List$ = this.menuCategoryService.getAll();
      this.columns = this.config.foodCategoryMenuItems;
      this.categoryName = 'menu-category'
      this.buttonClick = true
      this.buttonValue = 'menu'
    }
    if (type === 'fastfood') {
      this.List$ = this.fastfoodCategoryService.getAll();
      this.columns = this.config.fastfoodCategoryMenuItems;
      this.categoryName = 'fastfood-category'
      this.buttonClick = true
      this.buttonValue = 'fastfood'
    }
  }

  onDelete(id: number): void {
    if (this.buttonValue === 'menu') {
      this.menuCategoryService.delete(id).subscribe(
        response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/', this.componentName]);
          this.toastr.error(this.messages[0].message, this.messages[0].title);
          }
        )
      )
    }
    if (this.buttonValue === 'fastfood') {
      this.fastfoodCategoryService.delete(id).subscribe(
        response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/', this.componentName]);
          this.toastr.error(this.messages[0].message, this.messages[0].title);
          }
        )
      )
    }
  }

}
