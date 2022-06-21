import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { FastfoodCategoryService } from 'src/app/service/fastfood-category.service';
import { MenuCategoryService } from 'src/app/service/menu-category.service';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.scss']
})
export class MenuCategoryComponent implements OnInit {

  List$: Observable<any[]> = this.menuCategoryService.getAll();
  columns = this.config.foodCategoryMenuItems;
  componentName: string = 'category';
  categoryName: string = 'menu'

  currencyPipeOn: string = 'price';

  messages = this.config.toastrItems

  constructor(
    private menuCategoryService: MenuCategoryService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit( ): void { }

  onDelete(id: string): void {
      this.menuCategoryService.delete(id).subscribe(
        response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/', this.categoryName, this.componentName]);
          this.toastr.error(this.messages[0].message, this.messages[0].title);
          }
        )
      )
  }

}
