import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Fastfood } from 'src/app/model/fastfood';
import { ConfigService } from 'src/app/service/config.service';
import { FastfoodService } from 'src/app/service/fastfood.service';

@Component({
  selector: 'app-fastfood-product',
  templateUrl: './fastfood-product.component.html',
  styleUrls: ['./fastfood-product.component.scss']
})
export class FastfoodProductComponent implements OnInit {

  List$: Observable<Fastfood[]> = this.fastfoodService.getAll();
  columns = this.config.fastfoodMenuItems;
  componentName: string = 'product';
  categoryName: string = 'fastfood'

  joinObjectOn = 'allergens'

  messages = this.config.toastrItems

  constructor(
    private fastfoodService: FastfoodService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void { }

  onDelete(id: string): void {
    this.fastfoodService.delete(id).subscribe(
      response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/', this.categoryName, this.componentName]);
        this.toastr.error(this.messages[0].message, this.messages[0].title);
      }
      )
    )
  }

}
