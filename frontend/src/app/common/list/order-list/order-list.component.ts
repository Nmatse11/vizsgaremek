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
  componentName: string = 'order-menu';

  buttons = this.config.tableItems

  currencyPipeOn = 'amount';

  customerIdOn = 'customerID'

  buttonClick: boolean  = false

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
    if (type === 'order-menu') {
      this.List$ = this.menuOrderService.getAll();
      this.componentName = 'order-menu'
      this.buttonClick = true
    }
    if (type === 'order-fastfood') {
      this.List$ = this.fastfoodOrderService.getAll();
      this.componentName = 'order-fastfood'
      this.buttonClick = true
    }
  }

  onDelete(id: number): void {
    if (this.componentName === 'order-menu') {
      this.menuOrderService.delete(id).subscribe(
        response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/', 'order']);
          this.toastr.error(this.messages[0].message, this.messages[0].title);
          }
        )
      )
    }
    if (this.componentName === 'order-fastfood') {
      this.fastfoodOrderService.delete(id).subscribe(
        response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/', 'order']);
          this.toastr.error(this.messages[0].message, this.messages[0].title);
          }
        )
      )
    }
  }
}
