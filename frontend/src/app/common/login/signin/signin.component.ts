import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginText = this.config.loginText

  patternItems = this.config.patternItems

  user: User = new User()

  constructor(
    private config: ConfigService
  ) { }

  ngOnInit(): void { }

}
