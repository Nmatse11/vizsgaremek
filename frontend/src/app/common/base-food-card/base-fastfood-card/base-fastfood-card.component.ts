import { Component, Input, OnInit } from '@angular/core';
import { Fastfood } from 'src/app/model/fastfood';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-base-fastfood-card',
  templateUrl: './base-fastfood-card.component.html',
  styleUrls: ['./base-fastfood-card.component.scss']
})
export class BaseFastfoodCardComponent implements OnInit {

  @Input() fastfoodArray!: Fastfood[]
  @Input() price1!: number
  @Input() price2?: number
  @Input() price3?: number
  @Input() title!: string
  @Input() background!: string
  @Input() normalPizzaSize?: number
  @Input() familyPizzaSize?: number
  @Input() isPizza: boolean = false
  @Input() cat1!: string
  @Input() cat2?: string
  @Input() cat3?: string

  allergensItems = this.config.allergensItems

  normalPizza = this.config.normalPizza
  familyPizza = this.config.familyPizza

  unit = this.config.unitItems[0].name

  constructor(
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

  setAllergen(obj: any): string[] {
    let filtered = Object.keys(obj).filter(item => obj[item] === true)
    return filtered
  }

  setAllergenIcon(value: string): string {
    let img = ''
    this.allergensItems.filter(item => {
      if (item.key === value) {
        img = item.img
      }
    });
    return img
  }

}
