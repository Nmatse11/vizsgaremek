import { OrderFastfood } from './../model/order-fastfood';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SummaryService } from './summary.service';
import { Observable } from 'rxjs';

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

   getAllOrder(id: string): Observable<OrderFastfood[]> {
    return this.http.get<OrderFastfood[]>(`${this.apiUrl}${this.entityName}/customer/${id}`);
  }

  getAllPaidOrder(): Observable<OrderFastfood[]> {
    return this.http.get<OrderFastfood[]>(`${this.apiUrl}${this.entityName}/paid/orders`);
  }

}

