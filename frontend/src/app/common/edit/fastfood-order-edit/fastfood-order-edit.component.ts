import { ConfigService } from 'src/app/service/config.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderFastfood } from 'src/app/model/order-fastfood';
import { OrderFastfoodItem } from 'src/app/model/order-fastfood-item';
import { FastfoodOrderService } from 'src/app/service/fastfood-order.service';
import { CustomerService } from 'src/app/service/customer.service';
import { FastfoodService } from 'src/app/service/fastfood.service';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs';
import { DeleteDialogComponent } from '../../dialog/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-fastfood-order-edit',
  templateUrl: './fastfood-order-edit.component.html',
  styleUrls: ['./fastfood-order-edit.component.scss']
})
export class FastfoodOrderEditComponent implements OnInit {

  newOrder: OrderFastfood = new OrderFastfood();
  order!: OrderFastfood;

  editPageText = this.config.editPageText
  editPageItems = this.config.editPageItems

  orderFastfoodEditItems = this.config.orderFastfoodEditItems

  shippingKeys = this.config.statusItems.filter(item => item.key === "free" || item.key === "personal" || item.key === "shipping" ).map(item => item.key)
  shippingValue = this.config.statusItems.filter(item => item.key === "free" || item.key === "personal" || item.key === "shipping" ).map(item => item.name)

  statusKeys = this.config.statusItems.filter(item => item.key === "paid" || item.key === "new").map(item => item.key)
  statusValue = this.config.statusItems.filter(item => item.key === "paid" || item.key === "new").map(item => item.name)

  notesKeys = [this.config.normalPizzaKey, this.config.familyPizzaKey]
  notesValue = [this.config.editPageText[5].name, this.config.editPageText[6].name]

  messages = this.config.toastrItems
  tooltips = this.config.toolTipsItems

  oderEditError = this.config.orderEditErrorText

  customerKeys: number[] = []
  customerValue: string[] = []

  fastfoodKeys: number[] = []
  fastfoodValue: string[] = []
  fastfoodPizza: number[] = []
  noteBooleanNotes: boolean[] = []

  selected!: any[]

  deleteDialog = this.config.dialogItems

  constructor(
    private activatedRoute: ActivatedRoute,
    private fastfoodOrderService: FastfoodOrderService,
    private customerService: CustomerService,
    private fastfoodService: FastfoodService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getCustomer()
    this.getFastfood()
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.noteBooleanNotes.push(true)
      this.order = this.newOrder
    }
    else {
      this.activatedRoute.params.pipe(
        switchMap( params => this.fastfoodOrderService.getOne(params['id']))
        ).subscribe(order => {
          this.order = order
          this.selected = this.order.order.map(item => item.productID)
          this.selected.map(item => {
            if (this.fastfoodPizza.includes(Number(item))) {
              this.noteBooleanNotes.push(true)
            }
            if (!this.fastfoodPizza.includes(Number(item))) {
              this.noteBooleanNotes.push(false)
            }
          })
      })
    }
  }

  getCustomer(): void {
    this.customerService.getAll().subscribe(customers => {
      customers.map(customer => {
        this.customerKeys.push(customer.id)
        let name = `${customer.firstName} ${customer.lastName}`
        this.customerValue.push(name)
       })
    })
  }

  getFastfood(): void {
    this.fastfoodService.getAll().subscribe(fastfoods => {
      fastfoods.map(fastfood => {
        this.fastfoodKeys.push(fastfood.id)
        this.fastfoodValue.push(fastfood.name)
        if (fastfood.menu === 'pizza') {
          this.fastfoodPizza.push(fastfood.id)
        }
      })
    })
  }

  dataChanged(value: number, row: number): void {
    if (this.fastfoodPizza.includes(Number(value))) {
      this.noteBooleanNotes[row] = true
    }
    if (!this.fastfoodPizza.includes(Number(value))) {
      this.noteBooleanNotes[row] = false
    }
  }

  addNewRow(order: OrderFastfood): void {
    order.order.splice(order.order.length, 0, new OrderFastfoodItem())
    this.noteBooleanNotes.splice(this.noteBooleanNotes.length, 0, true)
  }

  removeRow(order: OrderFastfood, row: number): void {
    order.order.splice(row, 1)
    this.noteBooleanNotes.splice(row, 1)
  }

  saveOrder(order: OrderFastfood): void {
      if (this.activatedRoute.snapshot.params['id'] === '0') {
        this.fastfoodOrderService.create(order).subscribe(
          response => this.router.navigate(['/', 'order']));
          this.toastr.success(this.messages[1].message, this.messages[1].title);
      } else {
        this.fastfoodOrderService.update(order).subscribe(
          response => this.router.navigate(['/', 'order']));
          this.toastr.success(this.messages[2].message, this.messages[2].title);
      }
  }

  onDelete(id: number): void {
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
        this.fastfoodOrderService.delete(id).subscribe(
          response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/', 'order' ]);
            this.toastr.error(this.messages[0].message, this.messages[0].title);
            }
          )
        )
      }
    });
  }

}
