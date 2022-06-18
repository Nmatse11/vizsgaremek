import { Fastfood } from './../../../model/fastfood';
import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { Observable } from 'rxjs';
import { FastfoodService } from 'src/app/service/fastfood.service';
import { FastfoodCategoryService } from 'src/app/service/fastfood-category.service';
import { OrderFastfood } from 'src/app/model/order-fastfood';
import { CategoryFastfood } from 'src/app/model/category-fastfood';

@Component({
  selector: 'app-fastfood-cards',
  templateUrl: './fastfood-cards.component.html',
  styleUrls: ['./fastfood-cards.component.scss']
})
export class FastfoodCardsComponent implements OnInit {

  @Input() FastfoodList$!: Observable<Fastfood[]>
  @Input() OrderFastfoodList$!: Observable<OrderFastfood[]>
  @Input() CategoryFastfoodList$!: Observable<CategoryFastfood[]>

  FastFoodList!: Fastfood[]

  materialIcon1: string = "restaurant_menu"
  materialIcon2: string = "output"

  fastfoodCodes: string[] = []
  fastfoodCodesPrimary: string[] = []
  fastfoodCodesSecondary: string[] = []

  fastfoodPricesWithoutPizza: number[] = []
  fastfoodPricesPizza: number[] = []

  fastfoodNumberPrimary: number[] = []
  sumOfNumberPrimary: number = 0
  fastfoodNumberSecondary: number[] = []
  sumOfNumberSecondary: number = 0

  fastfoodOrder: number[] = []
  sumOfOrder: number[] = []

  sumOfAmount: number[] = []

  sumOfValueOrder: number = 0
  sumOfValueAmount: number = 0

  shippingName: string[] = []
  shippingNumber: number[] = []
  shippingAmount: number[] = []
  sumOfShippingNumber: number = 0
  sumOfAmountNumber: number = 0

  texts = this.config.dashboardCardItems
  tfootText = this.config.dashboardCardItems[10].title
  textTd = this.config.dashboardTdCardItems

  cardTitle1 = this.texts[4].title
  cardTitle2 = this.texts[14].title
  valueType = this.texts[4].valueType
  theadTitle1 = this.texts[11].title
  theadTitle2 = this.texts[12].title
  theadTitle3 = this.texts[13].title
  theadTitle4 = this.texts[7].title

  loading: boolean = false;

  type1: string = 'city'
  type2: string = 'amount'

  constructor(
    private config: ConfigService,
    private fastfoodService: FastfoodService,
    private fastfoodCategoryService: FastfoodCategoryService,
    ) { }

    ngOnInit(): void {
      if( this.FastfoodList$ && this.OrderFastfoodList$ && this.CategoryFastfoodList$ ) {
        this.FastfoodList$.subscribe(fastfoods => {
          this.OrderFastfoodList$!.subscribe(orders => {
            this.CategoryFastfoodList$.subscribe(categories => {
              this.FastFoodList = fastfoods
                this.setNumberOfFastfood(categories, fastfoods)
                this.setNumberOfOrder(fastfoods, orders)
                this.setValueOfNumber(categories)
                this.setFastfoodCategoryOrder(categories, fastfoods)
                this.setValueOfAmount(categories, fastfoods)
                this.setPriceOfFastfood(categories)
                this.setShippingArray(orders)
                this.loading = true
              })
            })
          })
        }
    }


  setNumberOfFastfood(categories: CategoryFastfood[], fastfoods: Fastfood[]): void {
      categories.map(category => {
      let number = 0
      number = fastfoods.filter(fastfood => fastfood.category === category.categoryCode).length

      if (number !== 0 && category.numberOfFood !== number ) {
        category.numberOfFood = number
        this.saveCategoryFastfood(category, category.numberOfFood)
      }
    })
  }

  saveCategoryFastfood(category: CategoryFastfood, item: number) {
    category.numberOfFood = item
    this.fastfoodCategoryService.update(category).subscribe(
      category => category,
      err => console.error(err))
  }


 setNumberOfOrder(fastfoods: Fastfood[], orders: OrderFastfood[]): void {
  fastfoods.map(fastfood => {
      let array = []
      let arrayFamily = []
      let arrayPaid = []
      let arrayFamilyPaid = []
      let number = 0
      let numberFamily = 0
      let paidNumber = 0
      let paidNumberFamily = 0
      orders.map(order => order.order.map(or => {
        if (!or.notes || or.notes === 'normal') {
          if (or.productID === fastfood.id) {
              array.push(or.productID)
          }
        }
        if (or.notes === "family") {
          if (or.productID === fastfood.id) {
            arrayFamily.push(or.productID)
        }
        }
      }))
      number = array.length
      numberFamily = arrayFamily.length

      orders.filter(order => order.status === 'paid').map(order => order.order.map(or => {
        if (!or.notes || or.notes === 'normal') {
          if (or.productID === fastfood.id) {
              arrayPaid.push(or.productID)
          }
        }
        if (or.notes === "family") {
          if (or.productID === fastfood.id) {
            arrayFamilyPaid.push(or.productID)
        }
      }
      }))
      paidNumber = arrayPaid.length
      paidNumberFamily = arrayFamilyPaid.length

      if (number !== 0 && fastfood.numberOfOrder !== number || paidNumber !== 0 && fastfood.numberOfPaidOrder !== paidNumber ) {
        fastfood.numberOfOrder = number
        fastfood.numberOfPaidOrder = paidNumber
        this.saveFastfoodOrder(fastfood, fastfood.numberOfOrder, fastfood.numberOfPaidOrder)
      }

      if (fastfood.category === 'PIZ') {
        if (numberFamily !== 0 && fastfood.numberOfOrderFamily !== numberFamily || paidNumberFamily !== 0 && fastfood.numberOfPaidOrderFamily !== paidNumberFamily) {
          fastfood.numberOfOrderFamily = numberFamily
          fastfood.numberOfPaidOrderFamily = paidNumberFamily
          this.saveFastfoodOrderPizza(fastfood, fastfood.numberOfOrderFamily, fastfood.numberOfPaidOrderFamily)
        }
      }
    })
   }

   saveFastfoodOrder(fastfood: Fastfood, item: number, item2: number) {
    fastfood.numberOfOrder = item
    fastfood.numberOfPaidOrder = item2
    this.fastfoodService.update(fastfood).subscribe(
      fastfood => fastfood,
      err => console.error(err))
  }

  saveFastfoodOrderPizza(fastfood: Fastfood, item: number, item2: number) {
    fastfood.numberOfOrderFamily = item
    fastfood.numberOfPaidOrderFamily = item2
    this.fastfoodService.update(fastfood).subscribe(
      fastfood => fastfood,
      err => console.error(err))
  }

  setFastfoodCategoryOrder(categories: CategoryFastfood[], fastfoods: Fastfood[]) {
    categories.map(category => {
      let arrayOrder: any[] = []
      let numberSum = 0

      fastfoods.map(fastfood => {
        if (fastfood.category !== "PIZ") {
          if (fastfood.category === category.categoryCode) {
                arrayOrder.push(fastfood.numberOfOrder)
          }
        }

        if (fastfood.category === "PIZ") {
          if (fastfood.category === category.categoryCode) {
              arrayOrder.push(fastfood.numberOfOrder)
              arrayOrder.push(fastfood.numberOfOrderFamily)
          }
        }
      })
      numberSum = arrayOrder.reduce((prev, next) => (prev as number) + (next as number), 0)

        if (numberSum !== 0 && category.sumOfOrder !== numberSum ) {
          category.sumOfOrder = numberSum
          this.saveFastfoodCategoryOrder(category, category.sumOfOrder)
        }

      if (category.categoryCode && category.size !== 40) {
        this.sumOfOrder.push(category.sumOfOrder as number)
      }

      this.sumOfValueOrder = this.sumOfOrder.reduce((prev, next) => prev + next, 0)
    })
  }

  saveFastfoodCategoryOrder(category: CategoryFastfood, item: number) {
    category.sumOfOrder = item
    this.fastfoodCategoryService.update(category).subscribe(
      category => category,
      err => console.error(err))
  }

  setValueOfNumber(categories: CategoryFastfood[]) {
    this.fastfoodCodes = [... new Set(categories
      .map(cat => cat.categoryCode))]
    this.fastfoodCodesPrimary = [... new Set(categories
      .filter(category => category.notes === 'primary')
      .map(cat => cat.categoryCode))]
    this.fastfoodCodesSecondary = [... new Set(categories
      .filter(category => category.notes === 'secondary')
      .map(cat => cat.categoryCode))]

    let elements1 = categories.filter(category => category.notes === 'primary')
    let elements2 = categories.filter(category => category.notes === 'secondary')

    this.fastfoodCodesPrimary.map(item => {
      let number = elements1.filter(element => element.categoryCode === item)
      .map(el => el.numberOfFood).reduce((prev, next) => (prev as number) + (next as number), 0)
      this.fastfoodNumberPrimary.push(number as number)
    })
    this.sumOfNumberPrimary = this.fastfoodNumberPrimary.reduce((prev, next) => prev + next, 0)

    this.fastfoodCodesSecondary.map(item => {
      let number = elements2.filter(element => element.categoryCode === item)
      .map(el => el.numberOfFood)[0]
      this.fastfoodNumberSecondary.push(number as number)
    this.sumOfNumberSecondary = this.fastfoodNumberSecondary.reduce((prev, next) => prev + next, 0)
    })
  }


  setValueOfAmount(categories: CategoryFastfood[], fastfoods: Fastfood[]) {
    categories.map(category => {
      let arrayAmount: any[] = []
      let number = 0

      fastfoods.map(fastfood => {
        if (fastfood.category !== "PIZ") {
          if (fastfood.category === category.categoryCode) {
            arrayAmount.push((fastfood.numberOfPaidOrder as number) * category.price)
          }
        }

        else if (fastfood.category === "PIZ") {
          let pizzanumber = 0
          if (fastfood.category === category.categoryCode && category.size === 32) {
            pizzanumber = (fastfood.numberOfPaidOrder as number) * category.price
          }
          if (fastfood.category === category.categoryCode && category.size === 40) {
            pizzanumber = (fastfood.numberOfPaidOrderFamily as number) * category.price
          }
          arrayAmount.push(pizzanumber)
        }
      })
      number = arrayAmount.reduce((prev, next) => (prev as number) + (next as number), 0)
        this.sumOfAmount.push(number)
    })
    this.sumOfValueAmount = this.sumOfAmount.reduce((prev, next) => prev + next, 0)
  }

  setFastfoodText(value: string): string {
    let number = ''
    this.textTd.filter(item => {
      if (item.key === value) {
        number = item.title
      }
    });
    return number
  }

  setPriceOfFastfood(categories: CategoryFastfood[]) {
    categories.map(category => {
      if (category.categoryCode !== "PIZ") {
        this.fastfoodPricesWithoutPizza.push(category.price)
      }
      if (category.categoryCode === "PIZ") {
        this.fastfoodPricesPizza.push(category.price)
      }
    })
  }

  setShippingArray(orders: OrderFastfood[]) {
    let variable: string[] = []
    let variableFree: string[] = []
    let variablePersonal: string[] = []
    let variableShipping: string[] = []
    let amountFree: number[] = []
    let amountPersonal: number[] = []
    let amountShipping: number[] = []
    let numberFree = 0
    let numberPersonal = 0
    let numberShipping = 0
    orders.map(order => {
      variable.push(order.shipping)
      if (order.shipping === "free") {
        variableFree.push(order.shipping)
        if (order.status === 'paid') {
          amountFree.push(order.amount)
        }
      }
      if (order.shipping === "personal") {
        variablePersonal.push(order.shipping)
        if (order.status === 'paid') {
          amountPersonal.push(order.amount)
        }
      }
      if (order.shipping === "shipping") {
        variableShipping.push(order.shipping)
        if (order.status === 'paid') {
          amountShipping.push(order.amount)
        }
      }
    })
    this.shippingName = [... new Set(variable)]
    this.shippingNumber.push(variableFree.length, variablePersonal.length, variableShipping.length)
    numberFree = amountFree.reduce((prev, next) => prev + next, 0)
    numberPersonal = amountPersonal.reduce((prev, next) => prev + next, 0)
    numberShipping = amountShipping.reduce((prev, next) => prev + next, 0)
    this.shippingAmount.push(numberFree, numberPersonal, numberShipping)
    this.sumOfShippingNumber = this.shippingNumber.reduce((prev, next) => prev + next, 0)
    this.sumOfAmountNumber = this.shippingAmount.reduce((prev, next) => prev + next, 0)
  }

}
