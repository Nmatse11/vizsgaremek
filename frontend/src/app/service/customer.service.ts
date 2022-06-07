import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Address } from '../model/address';
import { Customer } from '../model/customer';
import { SummaryService } from './summary.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends SummaryService<Customer>{

  constructor(
    public override http: HttpClient
  ) {
    super(http);
    this.entityName = 'customer';
  }

}
