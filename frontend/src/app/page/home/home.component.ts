import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  address: string = this.config.address
  addressLink: string = this.config.addressLink

  welcomeTexts = this.config.welcomeTexts
  welcomeMenuTexts = this.config.welcomeMenuTexts
  welcomeFastfoodTexts = this.config.welcomeFastfoodTexts
  cityItems = this.config.cityItems.map(item => item.text)

  constructor(
    private wowService: NgwWowService,
    private config: ConfigService
    ) {
    this.wowService.init();
  }

  ngOnInit() {
  }


}
