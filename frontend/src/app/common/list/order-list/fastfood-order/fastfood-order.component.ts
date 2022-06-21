import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { FastfoodOrderService } from 'src/app/service/fastfood-order.service';

@Component({
  selector: 'app-fastfood-order',
  templateUrl: './fastfood-order.component.html',
  styleUrls: ['./fastfood-order.component.scss']
})
export class FastfoodOrderComponent implements OnInit {

  List$: Observable<any[]> = this.fastfoodOrderService.getAll()
  columns = this.config.orderItems;
  componentName: string = 'order';
  categoryName: string = 'fastfood'

  currencyPipeOn = 'amount';
  customerIdOn = 'customerID'

  messages = this.config.toastrItems

  constructor(
    private fastfoodOrderService: FastfoodOrderService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
    ) { }


  ngOnInit( ): void {}

  onDelete(id: string): void {
      this.fastfoodOrderService.delete(id).subscribe(
        response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/', this.categoryName, this.componentName]);
          this.toastr.error(this.messages[0].message, this.messages[0].title);
          }
        )
      )
  }

}
