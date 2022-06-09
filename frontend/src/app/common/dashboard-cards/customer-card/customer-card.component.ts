import { Component, Input, OnInit } from '@angular/core';
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
  cardTitle: string = this.texts[0].title
  valueType = this.texts[0].valueType
  @Input() activeCustomerNumber$!:  Observable<Number>
  @Input() allOfCustomer$!: Observable<Number>

  constructor(
    private customerService: CustomerService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
