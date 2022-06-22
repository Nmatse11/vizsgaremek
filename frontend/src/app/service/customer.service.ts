import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getNames(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}${this.entityName}/names`);
  }

}
