import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeekService {

  weekNumber: number = 0

  constructor() {
    this.getWeekNumber()
   }

   getWeekNumber(): void {
    let currentDate = new Date();
    let startDate = new Date(currentDate.getFullYear(), 0, 1);
    let days = Math.floor((currentDate.getTime() - startDate.getTime()) /
        (24 * 60 * 60 * 1000));

    this.weekNumber = Math.ceil(( currentDate.getDay() - 1 + days) / 7);
  }
}
