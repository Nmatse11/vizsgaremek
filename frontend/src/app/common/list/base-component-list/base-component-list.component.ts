import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ITableColumnItem, ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-base-component-list',
  templateUrl: './base-component-list.component.html',
  styleUrls: ['./base-component-list.component.scss']
})
export class BaseComponentListComponent implements OnInit {

  @Input() List$!: Observable<any[]>
  @Input() columns!: ITableColumnItem[]
  @Input() componentName!: string
  @Input() categoryName!: string
  @Input() currencyPipeOn?: string
  @Input() joinObjectOn?: string
  @Input() customerNameOn?: string;

  @Output() removeById: EventEmitter<string> = new EventEmitter();

  header = this.config.tableItems

  setButtonText(key: string, key2: string): string {
    let buttonText = ''
    let filter = `${key}/${key2}`
    this.header.filter(item => {
      if (item.key === filter) {
        buttonText = item.title
      }
    });
    return buttonText
  }

  constructor(
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit( ): void { }

  onDelete(id: string): void {
    this.removeById.emit(id);
  }

}
