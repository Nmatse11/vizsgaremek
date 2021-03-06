import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { DeleteDialogComponent } from '../../dialog/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MenuOrderService } from 'src/app/service/menu-order.service';
import { FastfoodOrderService } from 'src/app/service/fastfood-order.service';
import { FastfoodService } from 'src/app/service/fastfood.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  newCustomer: Customer = new Customer();
  customer!: Customer;
  id: string = this.activatedRoute.snapshot.params['id']

  editPageText = this.config.editPageText
  editPageItems = this.config.editPageItems
  patternItems = this.config.patternItems

  customerEditItems = this.config.customerEditItems

  messages = this.config.toastrItems

  deleteDialog = this.config.dialogItems

  orderMenuArray: any[] = []
  orderFastfoodArray: any[] = []

  weekText = this.config.weekText

  categoryKeys = this.config.menuCardItems.map(item => item.key)
  categoryValue = this.config.menuCardItems.map(item => item.name)

  fastfoodKeys: string[] = []
  fastfoodValue: string[] = []
  fastfoodPizza: string[] = []

  notesKeys = [this.config.normalPizzaKey, this.config.familyPizzaKey]
  notesValue = [this.config.editPageText[5].name, this.config.editPageText[6].name]

  pizzaText = this.config.fastfoodEditMenuItems[0].new

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private orderMenuService: MenuOrderService,
    private orderFastfoodService: FastfoodOrderService,
    private fastfoodService: FastfoodService
  ) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.customer = this.newCustomer
    }
    else {
      this.activatedRoute.params.pipe(
        switchMap( params => this.customerService.getOne(params['id']))
        ).subscribe(customer => {
          this.customer = customer
          this.getAllOrder(customer)

        })
    }
  }

  getAllOrder(customer: Customer): void {
    this.orderMenuService.getAllOrder(customer._id).subscribe(orders => {
        this.orderMenuArray.push(orders)
        this.orderFastfoodService.getAllOrder(customer._id).subscribe(orders => {
          this.orderFastfoodArray.push(orders)
          if (this.orderFastfoodArray !== []) {
            this.getFastfood()
          }
      })
    })
  }

  getMenuName(value: string): string {
    return this.categoryValue[this.categoryKeys.indexOf(value)]
  }

  getFastfood(): void {
    this.fastfoodService.getAll().subscribe(fastfoods => {
      fastfoods.map(fastfood => {
        this.fastfoodKeys.push(fastfood._id)
        this.fastfoodValue.push(fastfood.name)
        if (fastfood.menu === 'pizza') {
          this.fastfoodPizza.push(fastfood._id)
        }
      })
    })
  }

  getFastfoodName(value: string): string {
    return this.fastfoodValue[this.fastfoodKeys.indexOf(value)]
  }

  getNotesName(value: string): string {
    return this.notesValue[this.notesKeys.indexOf(value)]
  }

  saveCustomer(customer: Customer): void {
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.customerService.create(customer).subscribe(
        response => this.router.navigate(['/', 'customer']));
        this.toastr.success(this.messages[1].message, this.messages[1].title);
    } else {
      this.customerService.update(customer).subscribe(
        response => this.router.navigate(['/', 'customer']));
        this.toastr.success(this.messages[2].message, this.messages[2].title);
    }
  }

  onDelete(id: string): void {
    const confirmDialog = this.dialog.open(DeleteDialogComponent, {
      data: {
        title: this.deleteDialog[0].title,
        message: this.deleteDialog[0].message,
        ok: this.deleteDialog[0].ok,
        cancel: this.deleteDialog[0].cancel
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.customerService.delete(id).subscribe(
          response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/', 'customer' ]);
            this.toastr.error(this.messages[0].message, this.messages[0].title);
            }
          )
        )
      }
    });
  }

}
