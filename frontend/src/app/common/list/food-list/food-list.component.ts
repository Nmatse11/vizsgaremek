import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { FastfoodService } from 'src/app/service/fastfood.service';
import { FoodService } from 'src/app/service/food.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  List$: Observable<any[]> = this.foodService.getAll();
  columns = this.config.foodMenuItems;
  componentName: string = 'food';
  categoryName: string = 'food'

  buttons = this.config.tableItems

  joinObjectOn = 'allergens'

  messages = this.config.toastrItems

  buttonClick: boolean  = false
  buttonValue: string = 'menu'

  constructor(
    private foodService: FoodService,
    private fastfoodService: FastfoodService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit( ): void { }

  setFoodList(type: string): void {
    if (type === 'menu') {
      this.List$ = this.foodService.getAll();
      this.columns = this.config.foodMenuItems;
      this.componentName = 'food';
      this.buttonClick = true
      this.buttonValue = 'menu'
    }
    if (type === 'fastfood') {
      this.List$ = this.fastfoodService.getAll();
      this.columns = this.config.fastfoodMenuItems;
      this.componentName = 'fastfood';
      this.buttonClick = true
      this.buttonValue = 'fastfood'
    }
  }

  onDelete(id: number): void {
    if (this.componentName === 'menu') {
      this.foodService.delete(id).subscribe(
        response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/', 'product']);
          this.toastr.error(this.messages[0].message, this.messages[0].title);
          }
        )
      )
    }
    if (this.componentName === 'fastfood') {
      this.fastfoodService.delete(id).subscribe(
        response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/', 'product']);
          this.toastr.error(this.messages[0].message, this.messages[0].title);
          }
        )
      )
    }

  }

}
