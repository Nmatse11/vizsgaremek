import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { FoodService } from 'src/app/service/food.service';
import { ToastrService } from 'ngx-toastr';
import { Food } from 'src/app/model/food';

@Component({
  selector: 'app-menu-product',
  templateUrl: './menu-product.component.html',
  styleUrls: ['./menu-product.component.scss']
})
export class MenuProductComponent implements OnInit {

  List$: Observable<Food[]> = this.foodService.getAll();
  columns = this.config.foodMenuItems;
  componentName: string = 'product';
  categoryName: string = 'menu'

  joinObjectOn = 'allergens'

  messages = this.config.toastrItems

  constructor(
    private foodService: FoodService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void { }

  onDelete(id: string): void {
    this.foodService.delete(id).subscribe(
      response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/', this.categoryName, this.componentName]);
        this.toastr.error(this.messages[0].message, this.messages[0].title);
      }
      )
    )
  }

}
