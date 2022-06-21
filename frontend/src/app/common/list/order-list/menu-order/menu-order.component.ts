import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { MenuOrderService } from 'src/app/service/menu-order.service';

@Component({
  selector: 'app-menu-order',
  templateUrl: './menu-order.component.html',
  styleUrls: ['./menu-order.component.scss']
})
export class MenuOrderComponent implements OnInit {

  List$: Observable<any[]> = this.menuOrderService.getAll()
  columns = this.config.orderItems;
  componentName: string = 'order';
  categoryName: string = 'menu'

  currencyPipeOn = 'amount';
  customerIdOn = 'customerID'

  messages = this.config.toastrItems

  constructor(
    private menuOrderService: MenuOrderService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
    ) { }

  ngOnInit( ): void {}

  onDelete(id: string): void {
      this.menuOrderService.delete(id).subscribe(
        response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/', this.categoryName, this.componentName]);
          this.toastr.error(this.messages[0].message, this.messages[0].title);
          }
        )
      )
    }



}
