import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderMenu } from 'src/app/model/order-menu';
import { switchMap } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { MenuOrderService } from 'src/app/service/menu-order.service';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderMenuItem } from 'src/app/model/order-menu-item';
import { DeleteDialogComponent } from '../../dialog/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-order-edit',
  templateUrl: './menu-order-edit.component.html',
  styleUrls: ['./menu-order-edit.component.scss']
})
export class MenuOrderEditComponent implements OnInit {

  newOrder: OrderMenu = new OrderMenu();
  order!: OrderMenu;
  id: string = this.activatedRoute.snapshot.params['id']

  editPageText = this.config.editPageText
  editPageItems = this.config.editPageItems
  orderMenuEditItems = this.config.orderMenuEditItems

  categoryKeys = this.config.menuCardItems.map(item => item.key)
  categoryValue = this.config.menuCardItems.map(item => item.name)

  shippingKeys = this.config.statusItems.filter(item => item.key === "free" || item.key === "personal" || item.key === "shipping" ).map(item => item.key)
  shippingValue = this.config.statusItems.filter(item => item.key === "free" || item.key === "personal" || item.key === "shipping" ).map(item => item.name)

  statusKeys = this.config.statusItems.filter(item => item.key === "paid" || item.key === "new").map(item => item.key)
  statusValue = this.config.statusItems.filter(item => item.key === "paid" || item.key === "new").map(item => item.name)

  messages = this.config.toastrItems
  tooltips = this.config.toolTipsItems

  weekText = this.config.weekText

  oderEditError = this.config.orderEditErrorText

  customerKeys: string[] = []
  customerValue: string[] = []

  deleteDialog = this.config.dialogItems

  constructor(
    private activatedRoute: ActivatedRoute,
    private menuOrderService: MenuOrderService,
    private customerService: CustomerService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getCustomer()
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.order = this.newOrder
    }
    else {
      this.activatedRoute.params.pipe(
        switchMap( params => this.menuOrderService.getOne(params['id']))
        ).subscribe(order => {
          this.order = order
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

  addNewRow(order: OrderMenu): void {
    order.order.splice(order.order.length, 0, new OrderMenuItem())
  }

  removeRow(order: OrderMenu, row: number): void {
    order.order.splice(row, 1)
  }

  saveOrder(order: OrderMenu): void {
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.menuOrderService.create(order).subscribe(
        response => this.router.navigate(['/', 'menu', 'order' ]));
        this.toastr.success(this.messages[1].message, this.messages[1].title);
    } else {
      this.menuOrderService.update(order).subscribe(
        response => this.router.navigate(['/', 'menu', 'order' ]));
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
        this.menuOrderService.delete(id).subscribe(
          response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/', 'menu', 'order' ]);
            this.toastr.error(this.messages[0].message, this.messages[0].title);
            }
          )
        )
      }
    });
  }

}
