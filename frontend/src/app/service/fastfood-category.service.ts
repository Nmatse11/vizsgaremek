import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryFastfood } from '../model/category-fastfood';
import { SummaryService } from './summary.service';

@Injectable({
  providedIn: 'root'
})
export class FastfoodCategoryService extends SummaryService<CategoryFastfood>{

  constructor(
    public override http: HttpClient
  ) {
    super(http);
    this.entityName = 'category-fastfood';
  }
}
