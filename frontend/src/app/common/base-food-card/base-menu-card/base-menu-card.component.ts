import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-base-menu-card',
  templateUrl: './base-menu-card.component.html',
  styleUrls: ['./base-menu-card.component.scss']
})
export class BaseMenuCardComponent implements OnInit {

  @Input() menuName1!: string;
  @Input() menuName2?: string;
  @Input() allergens?: string[];
  @Input() allergensSoup?: string[];
  @Input() weighSoup?: number;
  @Input() weigh!: number;
  @Input() unit!: string;
  @Input() imgLink!: string;
  @Input() imgLinkSoup!: string;
  @Input() isDrink: boolean = false;

  allergensItems = this.config.allergensItems

  weightText = this.config.weightText
  allergenText = this.config.allergenText

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

  setAllergenText(array: string[]): string {
    return array.join(', ')
  }

}
