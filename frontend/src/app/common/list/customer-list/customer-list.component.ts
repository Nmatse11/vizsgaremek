import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { ConfigService } from 'src/app/service/config.service';
import { CustomerService } from 'src/app/service/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  List$: Observable<Customer[]> = this.customerService.getAll();
  columns = this.config.customerItems;
  componentName: string = 'customer';
  sortPropIfObject ='city';

  getFullOn: string = 'address';

  messages = this.config.toastrItems

  constructor(
    private customerService: CustomerService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit( ): void { }

  onDelete(id: string): void {
    this.customerService.delete(id).subscribe(
      response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/', this.componentName]);
        this.toastr.error(this.messages[0].message, this.messages[0].title);
        }
      )
    )
  }

}
