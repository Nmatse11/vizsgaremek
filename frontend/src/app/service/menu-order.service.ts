import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { OrderMenu } from '../model/order-menu';
import { SummaryService } from './summary.service';

@Injectable({
  providedIn: 'root'
})
export class MenuOrderService extends SummaryService<OrderMenu> {

  constructor(
    public override http: HttpClient
  ) {
    super(http);
    this.entityName='order-menu';
   }

   getAllOrder(id: string): Observable<OrderMenu[]> {
    return this.http.get<OrderMenu[]>(`${this.apiUrl}${this.entityName}/customer/${id}`);
  }

  getAllPaidOrder(): Observable<OrderMenu[]> {
    return this.http.get<OrderMenu[]>(`${this.apiUrl}${this.entityName}/paid/orders`);
  }

}
