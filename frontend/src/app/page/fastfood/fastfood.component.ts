import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { OrderDialogComponent } from 'src/app/common/dialog/order-dialog/order-dialog.component';
import { CategoryFastfood } from 'src/app/model/category-fastfood';
import { Fastfood } from 'src/app/model/fastfood';
import { ConfigService } from 'src/app/service/config.service';
import { FastfoodCategoryService } from 'src/app/service/fastfood-category.service';
import { FastfoodService } from 'src/app/service/fastfood.service';
@Component({
  selector: 'app-fastfood',
  templateUrl: './fastfood.component.html',
  styleUrls: ['./fastfood.component.scss']
})
export class FastfoodComponent implements OnInit {

  FastfoodList$: Observable<Fastfood[]> = this.fastfoodService.getAll()

  fastFoodPrimaryTitleItems = this.config.fastfoodPrimaryTitle
  fastFoodSecondaryTitleItems = this.config.fastfoodSecondaryTitle

  fastfoodCodes: string[] = this.config.fastfoodTitle.map(item => item.key)
  fastfoodTitles: string[] = this.config.fastfoodTitle.map(item => item.title)
  fastfoodClass: string[] = this.config.fastfoodTitle.map(item => item.class)

  pizzaArray!: Fastfood[]
  hamburgerArray!: Fastfood[]
  gyrosArray!: Fastfood[]
  salataArray!: Fastfood[]
  sidedishArray!: Fastfood[]
  dessertArray!: Fastfood[]
  drinkArray!: Fastfood[]

  fastfoodArray!: any[]

  priceArray: number[] = []
  sizeArray: number[] = []

  allergensItems = this.config.allergensItems

  orderDialog = this.config.orderDialogItems
  orderFastfoodDialog = this.config.orderFastfoodDialog.map(item => item.name)

  constructor(
    private config: ConfigService,
    private fastfoodService: FastfoodService,
    private fastfoodCategoryService: FastfoodCategoryService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.fastfoodService.getAll().subscribe(fastfoods => {
      this.setFastfoodArray(fastfoods)
    })
    this.fastfoodCategoryService.getAll().subscribe(categories => {
      this.setFastfoodPrice(categories)
    })
  }

  setFastfoodArray(fastfoods: Fastfood[]) {
    this.pizzaArray = fastfoods.filter(fastfood => fastfood.active === true && fastfood.category.includes(this.fastfoodCodes[0]))
    this.gyrosArray = fastfoods.filter(fastfood => fastfood.active === true && fastfood.category.includes(this.fastfoodCodes[1]))
    this.hamburgerArray = fastfoods.filter(fastfood => fastfood.active === true && fastfood.category.includes(this.fastfoodCodes[2]))
    this.salataArray = fastfoods.filter(fastfood => fastfood.active === true && fastfood.category.includes(this.fastfoodCodes[3]))
    this.sidedishArray = fastfoods.filter(fastfood => fastfood.active === true && fastfood.category.includes(this.fastfoodCodes[4]))
    this.dessertArray = fastfoods.filter(fastfood => fastfood.active === true && fastfood.category.includes(this.fastfoodCodes[5]))
    this.drinkArray = fastfoods.filter(fastfood => fastfood.active === true && fastfood.category.includes(this.fastfoodCodes[6]))

    this.fastfoodArray = [this.pizzaArray, this.gyrosArray, this.hamburgerArray, this.salataArray, this.sidedishArray, this.dessertArray, this.drinkArray]
  }

  setFastfoodPrice(categories: CategoryFastfood[]) {
    for (let i = 0; i < this.fastfoodCodes.length; i++) {
      categories.filter(category => category.categoryCode.includes(this.fastfoodCodes[i])).map(cat => this.priceArray.push(cat.price))
    }
    categories.filter(category => category.categoryCode === 'PIZ').map(cat => this.sizeArray.push(cat.size as number))
  }

  setAllergenIcon(value: string): string {
    let img = ''
    this.allergensItems.filter(item => {
      if (item.key === value) {
        img = item.name
      }
    });
    return img
  }

  scroll(id: string) {
    let el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  }

  onOrderInformation(): void {
    const confirmDialog = this.dialog.open(OrderDialogComponent, {
      data: {
        title: this.orderDialog[0].title,
        message: this.orderFastfoodDialog,
        ok: this.orderDialog[0].ok,
        cancel: this.orderDialog[0].cancel
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
      }
    });
  }

}
