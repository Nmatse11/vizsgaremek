import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  user$ = this.authService.currentUserSubject$;
  login: boolean = (this.authService.currentUserSubject$) ? true : false

  admin: boolean = false
  editor: boolean = false

  appName: string = this.config.appName;
  navbarItems: IMenuItem[] = this.config.navbarItems;
  adminNavbar: IMenuItem = this.config.adminNavbar;
  adminNavbarItems: IMenuItem[] = this.config.adminNavbarItems;
  loginNavbarItems: IMenuItem[] = this.config.loginNavbarItems;

  constructor(
    private config: ConfigService,
    private authService: AuthService
  ) {
    this.user$.subscribe({
      next: user => {
        if (user) {
          this.getLoginNavbarItems(user.role)
          if (user.role === 'admin') {
            this.admin = true
          }
          if (user.role === 'editor') {
            this.editor = true
          }
        }
      }
    });
  }

  ngOnInit(): void {
  }

  getLoginNavbarItems(value: string): IMenuItem[] {
    let texts = this.config.loginNavbarItems.filter(item => item.role?.includes(value))
    return this.loginNavbarItems = texts
  }

  logout() {
    this.admin = false
    this.editor = false
    this.authService.logout();
  }

}
