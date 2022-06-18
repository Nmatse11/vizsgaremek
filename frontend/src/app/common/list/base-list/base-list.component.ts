import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ConfigService, ITableColumnItem } from 'src/app/service/config.service';
import { CustomerService } from 'src/app/service/customer.service';
import { DeleteDialogComponent } from '../../dialog/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.scss']
})
export class BaseListComponent implements OnInit, AfterViewInit {

  tableTitle!: string;
  buttonText!: string
  addButton!: string ;

  @Input() List$!: Observable<any[]>;
  List!: MatTableDataSource<any>;

  @Input() columns: ITableColumnItem[] = [];
  columnsArray!: string[]

  @Input() componentName!: string;

  @Input() sortPropIfObject!: string;

  @Output() removeById: EventEmitter<number> = new EventEmitter();

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() currencyPipeOn?: string;
  @Input() joinObjectOn?: string;
  @Input() getFullOn?: string;
  @Input() customerIdOn?: string

  header = this.config.tableItems
  units = this.config.unitItems
  tooltips = this.config.toolTipsItems
  status = this.config.statusItems
  paginatorTexts = this.config.paginatorItems
  addButtonTexts = this.config.addButton
  foodsType = this.config.foodItems
  deleteDialog = this.config.dialogItems
  allergensItems = this.config.allergensItems

  filterKey: string = '';
  phrase: string = '';

  customerKeys: number[] = []
  customerValue: string[] = []

  oderEditError = this.config.orderEditErrorText

  constructor(
    private dialog: MatDialog,
    private config: ConfigService,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    if ( this.List$ ) {
      this.List$.subscribe(
        result => {
          this.columnsArray = []
          this.columns.map(item => this.columnsArray.push(item.title))
          this.columnsArray.push('option');

          if (this.customerIdOn) {
              this.getCustomer()
          }

          this.List = new MatTableDataSource<any>(result)

          this.List.paginator = this.paginator;
          this.paginator._intl.itemsPerPageLabel = this.paginatorTexts[0].name;
          this.paginator._intl.nextPageLabel = this.paginatorTexts[1].name;
          this.paginator._intl.previousPageLabel = this.paginatorTexts[2].name;
          this.paginator._intl.lastPageLabel = this.paginatorTexts[3].name;
          this.paginator._intl.firstPageLabel = this.paginatorTexts[4].name;

          this.setTableHeader(this.componentName)

          this.addButton = `${this.addButtonTexts[0].name} ${this.buttonText} ${this.addButtonTexts[1].name}`

          this.List.filterPredicate = this.filterFunction;

          this.List.sort = this.sort;
          this.List.sortingDataAccessor = (row: any, colName: string): string => {
            if (typeof row[colName] === 'object') {
              return row[colName][this.sortPropIfObject] as string
            }
            return row[colName] as string;
          }
        }
      )
    }
  }

  ngAfterViewInit() {
    this.ngOnInit();
  }

  setTableHeader(key: string) {
    let tableTitle = ''
    let buttonText = ''
    this.header.filter(item => {
      if (item.key === key) {
        tableTitle = item.title;
        buttonText = item.name
      }
    });
    this.tableTitle = tableTitle
    this.buttonText = buttonText
  }

  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }

  useGetter(value: any): boolean {
    return value.toLowerCase().includes(this.getFullOn)
  }

  setObject(value: any): any {
    if (typeof value === 'object') {
      return Object.values(value)
    }
  }

  setAllergen(value: any): any {
    if (typeof value === 'object') {
      let filtered = Object.keys(value).filter(item => value[item] === true)
      let array: string[] = []
      filtered.map(allergen => {
        this.allergensItems.filter(item => {
          if (item.key === allergen) {
            array.push(item.name)
          }
        })
      })
      return array
    }
  }

  isUnit(value: any): boolean {
    let filter = ''
    this.units.filter(item => {
      if (item.key === value) {
        filter = item.key;
      }
    });
    return value === filter
  }

  setUnit(value: any): string {
    let unit = ''
    this.units.filter(item => {
      if (item.key === value) {
        unit = item.name
      }
    });
    return unit
  }

  isDrink(value: any): boolean {
    return value === 'drink'
  }

  setDrink(key: any, value: any): string {
    let unit = ''
    if (key === 'weight') {
      this.units.filter(item => {
        if (item.key === 'liter') {
          unit = item.name
        }
      })
    }
    return unit
  }

  setTooltipTrue(value: any): string {
    let tooltip = ''
    this.tooltips.filter(item => {
      if (item.key === value + 'True') {
        tooltip = item.name
      }
    });
    return tooltip
  }

  setTooltipFalse(value: any): string {
    let tooltip = ''
    this.tooltips.filter(item => {
      if (item.key === value + 'False') {
        tooltip = item.name
      }
    });
    return tooltip
  }

  isStatus(value: any): boolean {
    let filter = ''
    this.status.filter(item => {
      if (item.key === value) {
        filter = item.key;
      }
    });
    return value === filter
  }

  setStatusValue(value: any): string {
    let status = ''
    this.status.filter(item => {
      if (item.key === value) {
        status = item.name
      }
    });
    return status
  }

  isFoodType(value: any): boolean {
    let filter = ''
    this.foodsType.filter(item => {
      if (item.key === value) {
        filter = item.key;
      }
    });
    return value === filter
  }

  setFoodType(value: any): string {
    let foodType = ''
    this.foodsType.filter(item => {
      if (item.key === value) {
        foodType = item.name
      }
    });
    return foodType
  }

  getCustomer() {
    this.customerService.getAll().subscribe(customers => {
      customers.map(customer => {
        this.customerKeys.push(customer.id)
        let name = `${customer.firstName} ${customer.lastName}`
        this.customerValue.push(name)
      })
    })
  }

  setCustomerName(id: number): string {
      let index = this.customerKeys.indexOf(this.customerKeys.filter(item => item === Number(id))[0])
      return this.customerValue[index]
  }

  applyFilter() {
    const jsonString = JSON.stringify({ phrase: this.phrase, filterKey: this.filterKey })
    this.List.filter = jsonString;

    if (this.List.paginator) {
      this.List.paginator.firstPage();
    }
  }

  filterFunction(data: any, jsonString: string) {
    const filterObject = JSON.parse(jsonString);
    const phrase = filterObject.phrase.toLowerCase();
    const filterKey = filterObject.filterKey;

    if (!phrase) { return true };

    let array = [];

    if (filterKey) {
      array[0] = typeof data[filterKey] === 'object' ?
        Object.values(data[filterKey]) : data[filterKey];
    } else {
      array = Object.keys(data)
        .map(key => typeof data[key] === 'object' ?
          Object.values(data[key]) : data[key]);
    }
    return array.flat().join(' ').trim().toLowerCase().includes(phrase);
  };

  onDelete(id: number): void {
    const confirmDialog = this.dialog.open(DeleteDialogComponent, {
      data: {
        title: this.deleteDialog[0].title,
        message: this.deleteDialog[0].message,
        ok: this.deleteDialog[0].ok,
        cancel: this.deleteDialog[0].cancel
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.removeById.emit(id);
      }
    });
  }

}
