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

  incorrect: boolean = false

  user$ = this.authService.user$;

  constructor(
    private authService: AuthService,
    private config: ConfigService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(loginData: ILoginData): void {
      this.authService.login(loginData);
      this.user$.subscribe({
        next: user => {
          if (!user) {
            setTimeout(() => {
              this.incorrect = true
              setTimeout(() => {
                this.incorrect = false
              }, 2000)
            }, 1000)
          }
        }
      })
    }

}
