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

  getWeekDays(value: number): string[] {
    let currentDate = new Date();
    let startDate = new Date(currentDate.getFullYear(), 0, 1);
    let startDay = startDate.getDay()
    let currentWeekStartDay!: Date
    let currentWeekDays: string[] = []
    let currentLastWeekStartDay!: Date
    let currentLastWeekDays: string[] = []

    if (startDay > 1) {
      let number = 8 - startDay
      currentWeekStartDay = new Date(currentDate.getFullYear(), 0, ((1 + number) + (value - 1) * 7) )
      currentLastWeekStartDay = new Date(currentDate.getFullYear(), 0, ((1 - startDay + 1) + (value) * 7) )
    }
    else {
      currentWeekStartDay = new Date(currentDate.getFullYear(), 0, ((1 + value * 7) ))
      currentLastWeekStartDay = new Date(currentDate.getFullYear(), 0, ((1 + value * 7) ))
    }

    let day = currentWeekStartDay.getDate()
    let month = currentWeekStartDay.getMonth()
    let lastWeekDay = currentLastWeekStartDay.getDate()
    let lastWeekmonth = currentLastWeekStartDay.getMonth()

    for (let i = 0; i < 5; i++) {
      currentWeekDays.push(this.customDateFormats(new Date(currentDate.getFullYear(), month, (day + i ))))
      currentLastWeekDays.push(this.customDateFormats(new Date(currentDate.getFullYear(), lastWeekmonth, (lastWeekDay + i ))))
    }

    if (value === 0 ) {
      return currentLastWeekDays
    }
    return currentWeekDays
  }

  customDateFormats(date: Date): string {
    return date.toLocaleDateString('hu', { month: '2-digit', day: '2-digit', })
  }
}
