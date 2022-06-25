import { Bill } from './../../../model/bill';
import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { CategoryFastfood } from 'src/app/model/category-fastfood';
import { CategoryMenu } from 'src/app/model/category-menu';
import { Customer } from 'src/app/model/customer';
import { Fastfood } from 'src/app/model/fastfood';
import { Food } from 'src/app/model/food';
import { OrderFastfood } from 'src/app/model/order-fastfood';
import { OrderMenu } from 'src/app/model/order-menu';
import { BillService } from 'src/app/service/bill.service';
import { ConfigService } from 'src/app/service/config.service';
import { CustomerService } from 'src/app/service/customer.service';
import { FastfoodCategoryService } from 'src/app/service/fastfood-category.service';
import { FastfoodOrderService } from 'src/app/service/fastfood-order.service';
import { FastfoodService } from 'src/app/service/fastfood.service';
import { FoodService } from 'src/app/service/food.service';
import { MenuCategoryService } from 'src/app/service/menu-category.service';
import { MenuOrderService } from 'src/app/service/menu-order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  CustomerList$!: Observable<Customer[]>
  BillList$!: Observable<Bill[]>

  FoodList$!: Observable<Food[]>
  OrderMenuList$!: Observable<OrderMenu[]>
  CategoryMenuList$!: Observable<CategoryMenu[]>

  FastfoodList$!: Observable<Fastfood[]>
  OrderFastfoodList$!: Observable<OrderFastfood[]>
  CategoryFastfoodList$!: Observable<CategoryFastfood[]>

  paidBillAmount$!:  Observable<number>
  dontPaidBillAmount$!:  Observable<number>
  allOfBillAmount$!: Observable<number>

  billChartTitle: string = this.config.billChartLabel[0].label
  billChartData: number[] = []
  billChartLabels: string[] = []

  paidMenuAmount$!:  Observable<number>
  paidFastfoodAmount$!:  Observable<number>

  AmountChartTitle: string = this.config.billChartLabel[3].label
  AmountChartData: number[] = []
  AmountChartLabels: string[] = []

  activeCustomerNumber$!:  Observable<Number>
  allOfCustomer$!: Observable<Number>

  cityName: string[] = []
  cityNumberMenu: number[] = []
  cityAmountMenu: number[] = []
  ciytMenuChartNumberLabelsName: string = this.config.cityChartLabel[1].label
  ciytMenuChartAmountLabelsName: string = this.config.cityChartLabel[2].label
  cityChartTitle: string = this.config.cityChartLabel[0].label
  cityNumberFastfood: number[] = []
  cityAmountFastfood: number[] = []

  cityChartSecondaryTitleNumber = this.config.cityChartLabel[3].label
  cityChartSecondaryTitleAmount = this.config.cityChartLabel[4].label

  CityNumberChartData: number[] = []
  CityAmountChartData: number[] = []
  CityChartLabels: string[] = [this.config.cityChartLabel[1].label, this.config.cityChartLabel[2].label]

  dateChartTitle: string = this.config.dateChartLabel[0].label

  dateName: string[] = []
  dateNumberMenu: number[] = []
  dateAmountMenu: number[] = []
  dateNumberFastfood: number[] = []
  dateAmountFastfood: number[] = []
  DateChartLabels: string[] = [this.config.dateChartLabel[1].label, this.config.dateChartLabel[2].label]

  dateChartSecondaryTitleNumber = this.config.dateChartLabel[3].label
  dateChartSecondaryTitleAmount = this.config.dateChartLabel[4].label

  dontPaidOrderNumberFastfood$:  Observable<Number> = this.fastfoodOrderService.getNumberOfValueReserve('status', 'paid')
  allOfOrderNumberFastfood$:  Observable<Number> = this.fastfoodOrderService.getNumberOf()

  dontPaidOrderNumberMenu$:  Observable<Number> = this.menuOrderService.getNumberOfValue('status', 'new')
  allOfOrderNumberMenu$:  Observable<Number> = this.menuOrderService.getNumberOf()

  titles = this.config.dashboardTitleItems
  valueType = this.config.cityChartLabel[3].label

  ready1: boolean = false
  ready2: boolean = false
  ready3: boolean = false
  ready4: boolean = false
  ready5: boolean = false
  ready6: boolean = false

  constructor(
    private config: ConfigService,
    private billService: BillService,
    private customerService: CustomerService,
    private foodService: FoodService,
    private menuOrderService: MenuOrderService,
    private menuCategoryService: MenuCategoryService,
    private fastfoodService: FastfoodService,
    private fastfoodOrderService: FastfoodOrderService,
    private fastfoodCategoryService: FastfoodCategoryService,
  ) { }

  ngOnInit(): void {
    this.CustomerList$ = this.customerService.getAll();
    this.BillList$ = this.billService.getAll();
    this.FoodList$ = this.foodService.getAll();
    this.OrderMenuList$ = this.menuOrderService.getAllPaidOrder();
    this.CategoryMenuList$ = this.menuCategoryService.getAll();
    this.FastfoodList$ = this.fastfoodService.getAll();
    this.OrderFastfoodList$ = this.fastfoodOrderService.getAllPaidOrder();
    this.CategoryFastfoodList$ = this.fastfoodCategoryService.getAll();

    this.setBaseCardData()
    this.setBillChart()
    this.setAmountChart()

    combineLatest(
      this.CustomerList$,
      this.OrderMenuList$,
      this.OrderFastfoodList$,
      this.BillList$
    )
    .subscribe(
      ([customers, menuOrders, fastOrders, bills]) => {
        this.setCityArrayMenu(customers, menuOrders);
        this.setCityArrayFastfood(customers, fastOrders);
        this.setDateChartMenu(bills)
        this.setDateChartFastfood(bills)

        this.dateName.push(this.config.dateLabels[11].shortlabel)
        for (let i = 0; i < 12; i++) {
          this.dateName.push(this.config.dateLabels[i].shortlabel)
        }

      })
  }

  setBaseCardData() {
    this.paidBillAmount$ = this.billService.getSumValue('status', 'paid', 'amount')
    this.dontPaidBillAmount$ = this.billService.getSumValue('status', 'new', 'amount')
    this.allOfBillAmount$ = this.billService.getSum('amount')
    this.paidMenuAmount$ = this.billService.getSumValue3('status', 'paid', 'type', 'menu', 'amount')
    this.paidFastfoodAmount$ = this.billService.getSumValue3('status', 'paid', 'type', 'fastfood', 'amount')
    this.activeCustomerNumber$ = this.customerService.getNumberOfValue('active', true);
    this.allOfCustomer$ = this.customerService.getNumberOf()
  }

  setBillChart() {
    this.dontPaidBillAmount$.subscribe(dontPaidNumber => {
      this.paidBillAmount$.subscribe(paidNumber => {
        let number1 = dontPaidNumber
        let number2 = paidNumber
        this.billChartData = [number1, number2]
        this.ready2 = true
      })
    })
    let label1 = this.config.billChartLabel[1].label
    let label2 = this.config.billChartLabel[2].label
    this.billChartLabels.push(label2, label1)
  }

  setAmountChart() {
    this.paidMenuAmount$.subscribe(dontPaidNumber => {
      this.paidFastfoodAmount$.subscribe(paidNumber => {
        let number1 = dontPaidNumber
        let number2 = paidNumber
        this.AmountChartData.push(number1, number2)
        this.ready3 = true
      })
    })
    let label1 = this.config.billChartLabel[4].label
    let label2 = this.config.billChartLabel[5].label
    this.AmountChartLabels.push(label1, label2)
  }

  setCityArrayMenu(customers: Customer[], orders: OrderMenu[]): void {
    let cityArray: string[] = []
    let number: number = 0
    let array: string[] = []
    orders.map(order => {
      customers.filter(customer => customer._id === order.customerID).map(customer => {
          array.push(customer.shipAddress[0].city);
        })
      })
    this.cityName = [... new Set(array)]

    this.cityName.map(city => {
      cityArray = array.filter(item => item === city)
      number = cityArray.length
        this.cityNumberMenu.push(number)

        let customerOfCity = customers.filter(customer => customer.shipAddress[0].city === city).map(customer => customer._id)
        let amountOfCity: number[] = []
        customerOfCity.map(item => {
          orders.filter((order => order.customerID === item)).map(order => {
            amountOfCity.push(order.amount)
          })
        })
        this.cityAmountMenu.push(amountOfCity.reduce((prev, next) => prev + next, 0))

        this.ready4 = true
      })
      this.CityAmountChartData.push(this.cityAmountMenu[0])
      this.CityNumberChartData.push(this.cityNumberMenu[0])
  }


  setCityArrayFastfood(customers: Customer[], orders: OrderFastfood[]): void {
    let array: string[] = []
    let cityArray: string[] = []
    let number: number = 0
    orders.map(order => {
      customers.filter(customer => customer._id === order.customerID).map(customer => {
        array.push(customer.shipAddress[0].city);
      })
    })
    this.cityName = [... new Set(array)]

    this.cityName.map(city => {
      cityArray = array.filter(item => item === city)
      number = cityArray.length
      this.cityNumberFastfood.push(number)

      let customerOfCity = customers.filter(customer => customer.shipAddress[0].city === city).map(customer => customer._id)
      let amountOfCity: number[] = []
      customerOfCity.map(item => {
        orders.filter((order => order.customerID === item)).map(order => {
          amountOfCity.push(order.amount)
      })
    })
    this.cityAmountFastfood.push(amountOfCity.reduce((prev, next) => prev + next, 0))

    this.ready5 = true
  })
  this.CityAmountChartData.push(this.cityAmountFastfood[0])
  this.CityNumberChartData.push(this.cityNumberFastfood[0])
  }

  setDateChartMenu(bills: Bill[]): void {
    let lastYearNumber = bills.filter(bill => bill.status == 'paid' && bill.type === 'menu'
    && new Date(bill.billDate).getFullYear() === 2021).map(bill => bill.amount).length
    let lastYearAmount = bills.filter(bill => bill.status == 'paid' && bill.type === 'menu'
    && new Date(bill.billDate).getFullYear() === 2021).map(bill => bill.amount).reduce((prev, next) => prev + next, 0)
    this.dateNumberMenu.push(lastYearNumber)
    this.dateAmountMenu.push(lastYearAmount)

    for (let i = 0; i < 12; i++) {
    let array = bills.filter(bill => bill.status == 'paid' && bill.type === 'menu'
    && new Date(bill.billDate).getFullYear() !== 2021 && new Date(bill.billDate).getMonth() === i).map(bill => bill.amount)
          this.dateNumberMenu.push(array.length)
          this.dateAmountMenu.push(array.reduce((prev, next) => prev + next, 0))
        }
  }

  setDateChartFastfood(bills: Bill[]): void {
    let lastYearNumber = bills.filter(bill => bill.status == 'paid' && bill.type === 'fastfood'
    && new Date(bill.billDate).getFullYear() === 2021).map(bill => bill.amount).length
    let lastYearAmount = bills.filter(bill => bill.status == 'paid' && bill.type === 'fastfood'
    && new Date(bill.billDate).getFullYear() === 2021).map(bill => bill.amount).reduce((prev, next) => prev + next, 0)
    this.dateNumberFastfood.push(lastYearNumber)
    this.dateAmountFastfood.push(lastYearAmount)

    for (let i = 0; i < 12; i++) {
    let array = bills.filter(bill => bill.status == 'paid' && bill.type === 'fastfood'
    && new Date(bill.billDate).getFullYear() !== 2021 && new Date(bill.billDate).getMonth() === i).map(bill => bill.amount)
          this.dateNumberFastfood.push(array.length)
          this.dateAmountFastfood.push(array.reduce((prev, next) => prev + next, 0))
        }
  }

  scroll(id: string) {
    let el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  }

}
