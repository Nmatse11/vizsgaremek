import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { DeleteDialogComponent } from '../../dialog/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.customer = this.newCustomer
    }
    else {
      this.activatedRoute.params.pipe(
        switchMap( params => this.customerService.getOne(params['id']))
        ).subscribe(customer => this.customer = customer)
    }
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
