import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.scss']
})
export class ForbiddenComponent implements OnInit {

  forbiddenText = this.config.forbiddenText
  forbiddenTextPlease = this.config.forbiddenTextPlease
  loginText = this.config.loginText

  constructor(
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

  onBack() {
    history.back()
  }

}
