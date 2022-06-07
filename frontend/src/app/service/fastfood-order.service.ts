import { OrderFastfood } from './../model/order-fastfood';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SummaryService } from './summary.service';

@Injectable({
  providedIn: 'root'
})
export class FastfoodOrderService extends SummaryService<OrderFastfood> {

  constructor(
    public override http: HttpClient
  ) {
    super(http);
    this.entityName='order-fastfood';
   }

}

