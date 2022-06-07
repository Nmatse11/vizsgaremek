import { Component, OnInit } from '@angular/core';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  login: boolean = false

  appName: string = this.config.appName;
  navbarItems: IMenuItem[] = this.config.navbarItems;
  adminNavbar: IMenuItem = this.config.adminNavbar;
  adminNavbarItems: IMenuItem[] = this.config.adminNavbarItems;
  loginNavbarItems: IMenuItem[] = this.config.loginNavbarItems;

  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

}
