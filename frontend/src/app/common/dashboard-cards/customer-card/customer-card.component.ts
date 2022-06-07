import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent implements OnInit {

  texts = this.config.dashboardCardItems

  materialIcon: string = "group";
  activeCustomerNumber$:  Observable<Number> = this.customerService.getNumberOfValue('active', true);
  cardTitle: string = this.texts[0].title
  valueType = this.texts[0].valueType
  allOfCustomer$: Observable<Number> = this.customerService.getNumberOf()

  constructor(
    private customerService: CustomerService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
