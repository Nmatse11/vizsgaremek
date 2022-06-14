import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { SummaryService } from './summary.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends SummaryService<User>{

  constructor(
    public override http: HttpClient
  ) {
    super(http);
    this.entityName='user';
   }
}
