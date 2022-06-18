import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';
import { switchMap } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-bill-edit',
  templateUrl: './bill-edit.component.html',
  styleUrls: ['./bill-edit.component.scss']
})
export class BillEditComponent implements OnInit {

  newBill: Bill = new Bill();
  bill!: Bill;

  editPageText = this.config.editPageText
  editPageItems = this.config.editPageItems
  billEditItems = this.config.billEditItems

  typeKeys = this.config.foodItems.filter(item => item.key === "menu" || item.key === "fastfood" ).map(item => item.key)
  typeValue = this.config.foodItems.filter(item => item.key === "menu" || item.key === "fastfood" ).map(item => item.name)

  statusKeys = this.config.statusItems.filter(item => item.key === "paid" || item.key === "new"  ).map(item => item.key)
  statusValue = this.config.statusItems.filter(item => item.key === "paid" || item.key === "new"  ).map(item => item.name)

  messages = this.config.toastrItems

  constructor(
    private activatedRoute: ActivatedRoute,
    private billService: BillService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.bill = this.newBill
    }
    else {
      this.activatedRoute.params.pipe(
        switchMap( params => this.billService.getOne(params['id']))
        ).subscribe(bill => this.bill = bill)
    }
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
