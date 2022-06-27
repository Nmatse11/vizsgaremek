import { AfterViewInit, Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, filter } from 'rxjs';
import { Customer } from 'src/app/model/customer';
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
  @Input() categoryName?: string;

  @Output() removeById: EventEmitter<string> = new EventEmitter();

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() currencyPipeOn?: string;
  @Input() joinObjectOn?: string;
  @Input() getFullOn?: string;
  @Input() customerIdOn?: string;
  @Input() customerNameOn?: string;

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
  filterColumns!: string[]
  filterArray!: string[]
  filterItems = this.config.filterItems

  oderEditError = this.config.orderEditErrorText

  customerKeys: string[] = []
  customerValue: string[] = []

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
          if (this.componentName !== 'bill') {
          this.filterColumns = this.columns.map(item => item.key)
          this.filterArray = this.columns.map(item => item.title)
          }

          if (this.componentName === 'bill') {
            this.getCustomer()
            this.filterColumns = this.columns.map(item => item.key).filter(item => item !== 'orderID')
            this.filterArray = this.columns.map(item => item.title).filter(item => item !== 'Megrendelő neve')
          }

          this.List = new MatTableDataSource<any>(result)

          this.List.paginator = this.paginator;
          this.paginator._intl.itemsPerPageLabel = this.paginatorTexts[0].name;
          this.paginator._intl.nextPageLabel = this.paginatorTexts[1].name;
          this.paginator._intl.previousPageLabel = this.paginatorTexts[2].name;
          this.paginator._intl.lastPageLabel = this.paginatorTexts[3].name;
          this.paginator._intl.firstPageLabel = this.paginatorTexts[4].name;

          (this.categoryName) ? this.setTableHeader(`${this.categoryName}/${this.componentName}`) : this.setTableHeader(this.componentName)

          this.addButton = `${this.addButtonTexts[0].name} ${this.buttonText} ${this.addButtonTexts[1].name}`

          this.List.filterPredicate = this.filterFunction;

          this.List.sort = this.sort;
          this.List.sortingDataAccessor = (row: any, colName: string): string => {
            this.columns.filter(item => {
                if (item.title === colName) {
                  colName = item.key
                }
              })
            if (colName === 'allergens' || colName === "shipAddress") {
                return Object.values(row[colName][0]).join(' ') as string
            }
            if (colName === 'customerID') {
              return Object.entries(row[colName]).filter(item => item[0] === 'firstName' || item[0] === 'lastName').flat()[1] as string
            }
            if (colName === 'orderID') {
              return row[colName]._id as string
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
      let setObject: any[] = []
      let obj = Object.entries(value).filter(item => !item.includes('_id'))
      obj.map(item => setObject.push(obj[obj.indexOf(item)][1]))
      return setObject
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

  setCustomerName(value: Customer): any {
    if (typeof value === 'object') {
      let name = `${value.firstName} ${value.lastName}`
      return name
    }
  }

  getCustomer(): void {
    this.customerService.getNames().subscribe(customers => {
      customers.map(customer => {
        this.customerKeys.push(customer._id)
        let name = `${customer.firstName} ${customer.lastName}`
        this.customerValue.push(name)
      })
    })
  }

  setBillCustomerName(value: string): any {
    let filtered = this.customerKeys.filter(item => item === value)
    return this.customerValue[this.customerKeys.indexOf(filtered[0])]
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
    let phrase = filterObject.phrase.toLowerCase();
    const filterKey = filterObject.filterKey;

    const transformData = [
      {key: 'breakfast', name: 'reggeli'},
      {key: 'soup', name: 'leves'},
      {key: 'main_course', name: 'főétel'},
      {key: 'dessert', name: 'desszert'},
      {key: 'cake', name: 'sütemény'},
      {key: 'pickles', name: 'savanyúság'},
      {key: 'drink', name: 'üdítő'},
      {key: 'salata', name: 'saláta'},
      {key: 'side_dish', name: 'köret'},
      {key: 'menu', name: 'menü'},
      {key: 'fastfood', name: 'gyorskaja'},
      {key: 'prime', name: 'főmenü'},
      {key: 'option', name: 'opcionális'},
      {key: 'primary', name: 'elsődleges'},
      {key: 'secondary', name: 'mellékeles'},
      {key: 'new', name: 'Új'},
      {key: 'paid', name: 'Fizetett'},
      {key: 'free', name: 'Ingyenes kiszállítás'},
      {key: 'personal', name: 'Személyes átvétel'},
      {key: 'shipping', name: 'Kiszállítás'},
      {key: 'gluten', name: 'Glutén'},
      {key: 'milk', name: 'Tej'},
      {key: 'soya', name: 'Szója'},
      {key: 'egg', name: 'Tojás'},
      {key: 'peanut', name: 'Földimogyoró'},
      {key: 'walnut', name: 'Diófélék'},
      {key: 'true', name: 'igen'},
      {key: 'false', name: 'nem'}

    ]

    if (!phrase) { return true };

    if (phrase) {
      transformData.filter(item => {
        if (item.name.toLowerCase().includes(phrase)) {
          phrase = item.key;
        }
      })
    }

    let array: any = [];

    if (filterKey) {
      if (filterKey === 'allergens') {
        array[0] = Object.keys(data[filterKey][0]).filter(item => data[filterKey][0][item] === true)
      }
      if (filterKey === 'customerID') {
        let customerArray = Object.entries(data[filterKey]).filter(item => item[0] === 'firstName' || item[0] === 'lastName').flat()
        array[0] = [customerArray[1], customerArray[3]]
      }
      if (data[filterKey] && typeof data[filterKey][0] === 'object' && filterKey !== 'allergens' && filterKey !== 'customerID') {
        array[0] = Object.values(data[filterKey][0])
      }
      if (data[filterKey] && typeof data[filterKey][0] !== 'object' && filterKey !== 'allergens' && filterKey !== 'customerID') {
        array[0] = data[filterKey];
      }
    } else {
      Object.keys(data)
      .map(key => {
          if (key === 'allergens') {
            array.push(Object.keys(data[key][0]).filter(item => data[key][0][item] === true))
          }
          if (key === 'customerID') {
            let customerArray = Object.entries(data[key]).filter(item => item[0] === 'firstName' || item[0] === 'lastName').flat()
            array.push(customerArray[1])
            array.push(customerArray[3])
          }
          if (typeof data[key][0] === 'object' && key !== 'allergens' && key !== 'customerID') {
            array.push(Object.values(data[key][0]))
          }
          if (typeof data[key][0] !== 'object' && key !== 'allergens' && key !== 'customerID' ) {
            array.push(data[key])
          }
        })
      }

    return array.flat().join(' ').trim().toLowerCase().includes(phrase)
  };

  onDelete(id: string): void {
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
