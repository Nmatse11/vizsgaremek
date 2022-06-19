import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { FastfoodCategoryService } from 'src/app/service/fastfood-category.service';
import { MenuCategoryService } from 'src/app/service/menu-category.service';

@Component({
  selector: 'app-fastfood-category',
  templateUrl: './fastfood-category.component.html',
  styleUrls: ['./fastfood-category.component.scss']
})
export class FastfoodCategoryComponent implements OnInit {

  List$: Observable<any[]> = this.fastfoodCategoryService.getAll();
  columns = this.config.fastfoodCategoryMenuItems;
  componentName: string = 'category';
  categoryName: string = 'fastfood'

  currencyPipeOn: string = 'price';

  messages = this.config.toastrItems

  constructor(
    private fastfoodCategoryService: FastfoodCategoryService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit( ): void { }

  onDelete(id: number): void {
      this.fastfoodCategoryService.delete(id).subscribe(
        response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/', this.categoryName, this.componentName]);
          this.toastr.error(this.messages[0].message, this.messages[0].title);
          }
        )
      )
  }

}
