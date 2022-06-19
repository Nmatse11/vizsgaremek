import { Injectable } from '@angular/core';

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

  getWeekDays(value: number): Date[] {
    let currentDate = new Date();
    let startDate = new Date(currentDate.getFullYear(), 0, 1);
    let startDay = startDate.getDay()
    let currentWeekStartDay!: Date
    let currentWeekDays: Date[] = []
    let currentfirstWeekStartDay!: Date
    let currentfirstWeekDays: Date[] = []

    if (startDay > 1) {
      let number = 8 - startDay
      currentWeekStartDay = new Date(currentDate.getFullYear(), 0, ((1 + number) + (value - 1) * 7) )
      currentfirstWeekStartDay = new Date(currentDate.getFullYear(), 0, ((1 - startDay + 1) + (value) * 7) )
    }
    else {
      currentWeekStartDay = new Date(currentDate.getFullYear(), 0, ((1 + value * 7) ))
      currentfirstWeekStartDay = new Date(currentDate.getFullYear(), 0, ((1 + value * 7) ))
    }

    let day = currentWeekStartDay.getDate()
    let month = currentWeekStartDay.getMonth()
    let firstWeekDay = currentfirstWeekStartDay.getDate()
    let firstWeekmonth = currentfirstWeekStartDay.getMonth()
    let firstWeekYear = currentfirstWeekStartDay.getFullYear()

    for (let i = 0; i < 5; i++) {
      currentWeekDays.push(new Date(currentDate.getFullYear(), month, (day + i )))
      currentfirstWeekDays.push(new Date(firstWeekYear, firstWeekmonth, (firstWeekDay + i )))
    }

    if (value === 0 ) {
      return currentfirstWeekDays
    }
    return currentWeekDays
  }

  customDateFormats(date: Date): string {
    return date.toLocaleDateString('hu', { month: '2-digit', day: '2-digit', })
  }
}
