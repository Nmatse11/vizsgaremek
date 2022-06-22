
import { CustomerService } from 'src/app/service/customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';
import { switchMap } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { MenuOrderService } from 'src/app/service/menu-order.service';
import { FastfoodOrderService } from 'src/app/service/fastfood-order.service';

@Component({
  selector: 'app-bill-edit',
  templateUrl: './bill-edit.component.html',
  styleUrls: ['./bill-edit.component.scss']
})
export class BillEditComponent implements OnInit {

  newBill: Bill = new Bill();
  bill!: Bill;
  id: string = this.activatedRoute.snapshot.params['id']

  editPageText = this.config.editPageText
  editPageItems = this.config.editPageItems
  billEditItems = this.config.billEditItems

  typeKeys = this.config.foodItems.filter(item => item.key === "menu" || item.key === "fastfood" ).map(item => item.key)
  typeValue = this.config.foodItems.filter(item => item.key === "menu" || item.key === "fastfood" ).map(item => item.name)

  statusKeys = this.config.statusItems.filter(item => item.key === "paid" || item.key === "new"  ).map(item => item.key)
  statusValue = this.config.statusItems.filter(item => item.key === "paid" || item.key === "new"  ).map(item => item.name)

  messages = this.config.toastrItems

  customerKeys: string[] = []
  customerValue: string[] = []

  orderMenuKeys: string[] = []
  orderFastfoodKeys: string[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private billService: BillService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
    private customerService: CustomerService,
    private orderMenuService: MenuOrderService,
    private orderFastfoodService: FastfoodOrderService
  ) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.bill = this.newBill
      this.getOrder()
    }
    else {
      this.activatedRoute.params.pipe(
        switchMap( params => this.billService.getOne(params['id']))
        ).subscribe(bill => {
          this.bill = bill
          this.getCustomer()
        })
    }
  }

  getCustomer(): void {
    this.customerService.getAll().subscribe(customers => {
      customers.map(customer => {
        this.customerKeys.push(customer._id)
        let name = `${customer.firstName} ${customer.lastName}`
        this.customerValue.push(name)
       })
    })
  }

  getOrder(): void {
    this.orderMenuService.getAll().subscribe(menuorders => {
      menuorders.map(menuorder => {
        this.orderMenuKeys.push(menuorder._id)
      })
    })
    this.orderFastfoodService.getAll().subscribe(fastfoodorders => {
      fastfoodorders.map(fastfoodorder => {
          this.orderFastfoodKeys.push(fastfoodorder._id)
      })
    })
  }

  saveBill(bill: Bill): void {
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.billService.create(bill).subscribe(
        response => this.router.navigate(['/', 'bill']));
        this.toastr.success(this.messages[1].message, this.messages[1].title);
    } else {
      this.billService.update(bill).subscribe(
        response => this.router.navigate(['/', 'bill']));
        this.toastr.success(this.messages[2].message, this.messages[2].title);
    }
  }

}
