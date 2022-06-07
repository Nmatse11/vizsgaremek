import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from '../model/food';
import { SummaryService } from './summary.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService extends SummaryService<Food>{

  constructor(
    public override http: HttpClient
  ) {
    super(http);
    this.entityName='foods-menu';
   }
}
