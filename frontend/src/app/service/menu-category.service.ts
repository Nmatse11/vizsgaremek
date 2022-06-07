import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryMenu } from '../model/category-menu';
import { SummaryService } from './summary.service';

@Injectable({
  providedIn: 'root'
})
export class MenuCategoryService extends SummaryService<CategoryMenu>{

  constructor(
    public override http: HttpClient
  ) {
    super(http);
    this.entityName = 'category-menu';
  }
}
