import { Injectable } from '@angular/core';
import { Menu } from '../model/menu';
import { HttpClient } from '@angular/common/http';
import { SummaryService } from './summary.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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

   getMenu(week: number): Observable<Menu> {
    return this.http.get<Menu>(`${this.apiUrl}${this.entityName}/set/${week}`);
  }
}
