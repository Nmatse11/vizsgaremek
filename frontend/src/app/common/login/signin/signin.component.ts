import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService, ILoginData } from 'src/app/service/auth.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginText = this.config.loginText

  patternItems = this.config.patternItems

  loginData: ILoginData = {};

  constructor(
    private authService: AuthService,
    private config: ConfigService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.logout();
  }

  onLogin(loginData: ILoginData): void {
    this.authService.login(loginData);
  }

}
