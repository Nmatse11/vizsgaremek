import { Fastfood } from './../../../model/fastfood';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { FastfoodService } from 'src/app/service/fastfood.service';
import { DeleteDialogComponent } from '../../dialog/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FastfoodOrderService } from 'src/app/service/fastfood-order.service';
import { OrderFastfood } from 'src/app/model/order-fastfood';

@Component({
  selector: 'app-fastfood-edit',
  templateUrl: './fastfood-edit.component.html',
  styleUrls: ['./fastfood-edit.component.scss']
})
export class FastfoodEditComponent implements OnInit {

  newFastfood: Fastfood = new Fastfood();
  fastfood!: Fastfood;

  editPageText = this.config.editPageText
  editPageItems = this.config.editPageItems
  fastfoodEditItems = this.config.fastfoodEditItems

  allergensItems = this.config.allergensItems

  selected!: string

  allergensValue = this.config.allergensItems.map(item => item.key)
  allergensName = this.config.allergensItems.map(item => item.name)

  fastfoodEditMenuItems = this.config.fastfoodEditMenuItems

  categoryKeys = this.config.dashboardTdCardItems.filter(item => this.config.dashboardTdCardItems.indexOf(item) > 12 && this.config.dashboardTdCardItems.indexOf(item) < 23  ).map(item => item.key)
  categoryValue = this.config.dashboardTdCardItems.filter(item => this.config.dashboardTdCardItems.indexOf(item) > 12 && this.config.dashboardTdCardItems.indexOf(item) < 23  ).map(item => item.title)

  messages = this.config.toastrItems

  deleteDialog = this.config.dialogItems

  constructor(
    private activatedRoute: ActivatedRoute,
    private fastfoodService: FastfoodService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private fastfoodOrderService: FastfoodOrderService
  ) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.fastfood = this.newFastfood
      this.selected = this.setSelected(this.fastfood.menu)
    }
    else {
      this.activatedRoute.params.pipe(
        switchMap( params => this.fastfoodService.getOne(params['id']))
        ).subscribe(fastfood => {
          this.fastfood = fastfood
          this.selected = this.setSelected(fastfood.menu)
          this.fastfoodOrderService.getAll().subscribe(orders => {
            this.setNumberOfOrder(fastfood, orders)
        })
        })
    }
  }

  setNumberOfOrder(fastfood: Fastfood, orders: OrderFastfood[]): void {
    let array = []
    let arrayFamily = []
    let arrayPaid = []
    let arrayFamilyPaid = []
    let number = 0
    let numberFamily = 0
    let paidNumber = 0
    let paidNumberFamily = 0
    orders.map(order => order.order.map(or => {
      if (!or.notes || or.notes === 'normal') {
        if (or.productID === fastfood.id) {
            array.push(or.productID)
        }
      }
      if (or.notes === "family") {
        if (or.productID === fastfood.id) {
          arrayFamily.push(or.productID)
      }
      }
    }))
    number = array.length
    numberFamily = arrayFamily.length
    orders.filter(order => order.status === 'paid').map(order => order.order.map(or => {
      if (!or.notes || or.notes === 'normal') {
        if (or.productID === fastfood.id) {
            arrayPaid.push(or.productID)
        }
      }
      if (or.notes === "family") {
        if (or.productID === fastfood.id) {
          arrayFamilyPaid.push(or.productID)
      }
    }
    }))
    paidNumber = arrayPaid.length
    paidNumberFamily = arrayFamilyPaid.length
    if (number !== 0 && fastfood.numberOfOrder !== number || paidNumber !== 0 && fastfood.numberOfPaidOrder !== paidNumber ) {
      fastfood.numberOfOrder = number
      fastfood.numberOfPaidOrder = paidNumber
      this.saveFastfoodOrder(fastfood, fastfood.numberOfOrder, fastfood.numberOfPaidOrder)

    if (fastfood.category === 'PIZ') {
      if (numberFamily !== 0 && fastfood.numberOfOrderFamily !== numberFamily || paidNumberFamily !== 0 && fastfood.numberOfPaidOrderFamily !== paidNumberFamily) {
        fastfood.numberOfOrderFamily = numberFamily
        fastfood.numberOfPaidOrderFamily = paidNumberFamily
        this.saveFastfoodOrderPizza(fastfood, fastfood.numberOfOrderFamily, fastfood.numberOfPaidOrderFamily)
        }
      }
    }
  }

  saveFastfoodOrder(fastfood: Fastfood, item: number, item2: number) {
    fastfood.numberOfOrder = item
    fastfood.numberOfPaidOrder = item2
    this.fastfoodService.update(fastfood).subscribe(
      fastfood => fastfood,
      err => console.error(err))
  }

  saveFastfoodOrderPizza(fastfood: Fastfood, item: number, item2: number) {
    fastfood.numberOfOrderFamily = item
    fastfood.numberOfPaidOrderFamily = item2
    this.fastfoodService.update(fastfood).subscribe(
      fastfood => fastfood,
      err => console.error(err))
  }

  dataChanged(value: string) {
    let name = ''
    this.fastfoodEditMenuItems.filter(item => {
      if (value.includes(item.key)) {
        name = item.new
      }
    });
    this.selected = name
  }

  setSelected(value: string) {
    let name = ''
    this.fastfoodEditMenuItems.filter(item => {
      if (item.title === value) {
        name = item.new
      }
    });
    return name
  }

  saveFastfood(fastfood: Fastfood): void {
    fastfood.menu = this.selected
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.fastfoodService.create(fastfood).subscribe(
        response => this.router.navigate(['/', 'fastfood', 'product']));
        this.toastr.success(this.messages[1].message, this.messages[1].title);
    } else {
      this.fastfoodService.update(fastfood).subscribe(
        response => this.router.navigate(['/', 'fastfood', 'product']));
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
        this.fastfoodService.delete(id).subscribe(
          response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/', 'fastfood', 'product' ]);
            this.toastr.error(this.messages[0].message, this.messages[0].title);
            }
          )
        )
      }
    });
  }

}
