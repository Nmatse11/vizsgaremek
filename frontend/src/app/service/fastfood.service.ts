import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fastfood } from '../model/fastfood';
import { SummaryService } from './summary.service';

@Injectable({
  providedIn: 'root'
})
export class FastfoodService extends SummaryService<Fastfood> {

  constructor(
    public override http: HttpClient
  ) {
    super(http);
    this.entityName='foods-fastfood';
   }
}
