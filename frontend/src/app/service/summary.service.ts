import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SummaryService<T extends { id: number, [key: string]: any  }> extends BaseService<T> {

  constructor(
    public override http: HttpClient,
  ) {
    super(http);
  }

  getNumberOf(): Observable<number> {
    return  super.getAll().pipe(map(item => item.length))
  }

  getNumberOfValue(prop: string, value: string | boolean): Observable<number> {
    return  super.getAll().pipe(map(item => item.filter(i => i[prop] == value).length))
  }

  getNumberOfValue2(prop: string, prop2: string, value: string | boolean, value2: string | boolean): Observable<number> {
    return  super.getAll().pipe(map(item => item.filter(i => i[prop] == value).filter(i => i[prop2] == value2).length))
  }

  getNumberOfValueReserve(prop: string, value: string | boolean): Observable<number> {
    return  super.getAll().pipe(map(item => item.filter(i => i[prop] != value).length))
  }

  getSum(prop: string): Observable<number> {
    return  super.getAll().pipe(map(item => item.map(k => k[prop])
    .reduce((a, b) => a + b)))
  }

  getSumValue(prop: string, value: string | boolean | number, prop2: string): Observable<number> {
    return  super.getAll().pipe(map(item => item.filter(i => i[prop] == value).map(k => k[prop2])
    .reduce((a, b) => a + b)))
  }

  getSumValue2(prop: string, value: string | boolean | number, prop2: string): Observable<T[]> {
    return  super.getAll().pipe(map(item => item.filter(i => i[prop] == value).map(k => k[prop2])))
  }

  getSumValue3(prop: string, value: string | boolean | number, prop2: string, value2: string | boolean | number, prop3: string): Observable<number> {
    return  super.getAll().pipe(map(item => item.filter(i => i[prop] == value).filter(i => i[prop2] == value2).map(k => k[prop3])
    .reduce((a, b) => a + b)))
  }

  getSumValueReverse(prop: string, value: string | boolean, prop2: string): Observable<Number> {
    return  super.getAll().pipe(map(item => item.filter(i => i[prop] != value).map(k => k[prop2])
    .reduce((a, b) => a + b)))
  }

  /*
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
  integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
  integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
  integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  */
}
