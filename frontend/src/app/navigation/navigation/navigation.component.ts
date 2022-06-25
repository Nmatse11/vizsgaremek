import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  user$ = this.authService.user$;
  user!: User

  appName: string = this.config.appName;
  navbarItems: IMenuItem[] = this.config.navbarItems;
  adminNavbar: IMenuItem = this.config.adminNavbar;
  adminNavbarItems: IMenuItem[] = this.config.adminNavbarItems;
  loginNavbarItems: IMenuItem[] = this.config.loginNavbarItems.filter(item => item.status === false);
  loginUserNavbarItems!: IMenuItem[]

  customerName!: string

  constructor(
    private config: ConfigService,
    private authService: AuthService,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.user$.subscribe({
      next: user => {
        if (user) {
          this.user = user
          this.loginUserNavbarItems = this.config.loginNavbarItems.filter(item => item.status === true && item.role?.includes(user.role));
          this.getCustomer(user)
        }
      }
    });
  }

  getCustomer(user: User): any {
    if (user.customerID) {
      this.customerService.getOne(user.customerID).subscribe(customer => {
          this.customerName = `${customer.firstName} ${customer.lastName}`
        })
    }
  }

  onLogout() {
    this.user!
    this.authService.logout();
  }

}
