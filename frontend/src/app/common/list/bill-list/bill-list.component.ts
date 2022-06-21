import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';
import { ConfigService } from 'src/app/service/config.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.scss']
})
export class BillListComponent implements OnInit {

  List$: Observable<Bill[]> = this.billService.getAll();
  columns = this.config.billMenuItems;
  componentName = 'bill';

  currencyPipeOn = 'amount';

  messages = this.config.toastrItems

  constructor(
    private billService: BillService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit( ): void { }

  onDelete(id: string): void {
    this.billService.delete(id).subscribe(
      response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/', this.componentName]);
        this.toastr.error(this.messages[0].message, this.messages[0].title);
        }
      )
    )
  }

}
