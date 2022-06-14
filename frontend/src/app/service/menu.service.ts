import { Injectable } from '@angular/core';
import { Menu } from '../model/menu';
import { HttpClient } from '@angular/common/http';
import { SummaryService } from './summary.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends SummaryService<Menu>{

  constructor(
    public override http: HttpClient
  ) {
    super(http);
    this.entityName='menu';
   }
}
