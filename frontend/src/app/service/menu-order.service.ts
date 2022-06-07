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

   getNumberOfValue3(prop: string) : Observable<any> {
    return  super.getAll().pipe(map(item => item.filter(i => i[prop] == 'order')))
    //prop2: string, value2: string | boolean, value3: string | boolean)
    //.filter(element => element[prop2] == value2).filter(i => i == value3).length))
  }

}
