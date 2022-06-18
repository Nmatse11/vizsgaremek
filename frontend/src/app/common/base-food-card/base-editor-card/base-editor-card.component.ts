import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { FoodService } from 'src/app/service/food.service';
import { Food } from 'src/app/model/food';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base-editor-card',
  templateUrl: './base-editor-card.component.html',
  styleUrls: ['./base-editor-card.component.scss']
})
export class BaseEditorCardComponent implements OnInit {

  @Input() Foods!: any[]
  @Input() SoupFoods!: any[]
  @Input() menuName1?: string[];
  @Input() menuName2!: string[];
  @Input() selectedMenuCategory1!: string
  @Input() selectedMenuCategory2!: string

  menuSelectArray: string[] = this.config.menuCardItems.map(item => item.key)

  editItem1!: boolean
  editItem2!: boolean

  menuFormText: string[] = this.config.menuEditorFormText.map(item => item.name)

  constructor(
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.editItem1 = false
    this.editItem2 = false
  }

  setAllergenText(array: string[]): string {
    return array.join(', ')
  }

  editItem(value: number) {
    this.editItem1 = false
    this.editItem2 = false

    if (value === 1) {
      this.editItem1 = true
    }
    if (value === 2) {
      this.editItem2 = true
    }
  }

  saveItem() {
    console.log('Save')
  }


}
