import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { FastfoodOrderService } from 'src/app/service/fastfood-order.service';
import { MenuOrderService } from 'src/app/service/menu-order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  List$: Observable<any[]> = this.menuOrderService.getAll()
  columns = this.config.orderItems;
  componentName: string = 'order';
  categoryName: string = 'order-menu'

  buttons = this.config.tableItems

  currencyPipeOn = 'amount';

  customerIdOn = 'customerID'

  buttonClick: boolean  = false
  buttonValue: string = 'menu'

  messages = this.config.toastrItems

  constructor(
    private menuOrderService: MenuOrderService,
    private fastfoodOrderService: FastfoodOrderService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
    ) { }

    amount: number[] = []


  ngOnInit( ): void {}

  setOrderList(type: string): void {
    if (type === 'menu') {
      this.List$ = this.menuOrderService.getAll();
      this.categoryName = 'oder-menu'
      this.buttonClick = true
      this.buttonValue = 'menu'
    }
    if (type === 'fastfood') {
      this.List$ = this.fastfoodOrderService.getAll();
      this.categoryName = 'oder-fastfood'
      this.buttonClick = true
      this.buttonValue = 'fastfood'
    }
  }

  onDelete(id: number): void {
    if (this.buttonValue === 'menu') {
      this.menuOrderService.delete(id).subscribe(
        response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/', this.componentName]);
          this.toastr.error(this.messages[0].message, this.messages[0].title);
          }
        )
      )
    }
    if (this.buttonValue === 'fastfood') {
      this.fastfoodOrderService.delete(id).subscribe(
        response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/', this.componentName]);
          this.toastr.error(this.messages[0].message, this.messages[0].title);
          }
        )
      )
    }
  }
}
