import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/model/customer';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { ConfigService } from 'src/app/service/config.service';
import { CustomerService } from 'src/app/service/customer.service';
import { FastfoodOrderService } from 'src/app/service/fastfood-order.service';
import { FastfoodService } from 'src/app/service/fastfood.service';
import { MenuOrderService } from 'src/app/service/menu-order.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  customer!: Customer;
  customerName!: string

  user$ = this.authService.user$;

  onEdit: boolean = false

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
    private customerService: CustomerService,
    private config: ConfigService,
    private toastr: ToastrService,
    private authService: AuthService,
    private orderMenuService: MenuOrderService,
    private orderFastfoodService: FastfoodOrderService,
    private fastfoodService: FastfoodService
  ) { }

  ngOnInit(): void {
    this.user$.subscribe({
      next: user => {
        if (user) {
          this.getCustomer(user)
        }
      }
    });
  }

  getCustomer(user: User): any {
    if (user.customerID) {
      this.customerService.getOne(user.customerID).subscribe(customer => {
          this.customerName = `${customer.firstName} ${customer.lastName}`
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


  onUpdate(customer: Customer): void {
      this.customerService.update(customer).subscribe(
        response => {
        this.toastr.success(this.messages[2].message, this.messages[2].title),
        this.onEdit = false
        })
  }

  setOnEdit(value: boolean): void {
    if (value) {
      this.onEdit = false
    }
    if (!value) {
      this.onEdit = true
    }
  }

}
