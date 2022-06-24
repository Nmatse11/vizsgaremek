import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfigService } from 'src/app/service/config.service';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  customer: Customer = new Customer();
  user: User = new User()

  alreadyCustomer!: Customer

  editPageText = this.config.editPageText
  signupTitleText = this.config.signupTitleText
  signupButtonText = this.config.signupButtonText
  signupSaveButtonText = this.config.signupSaveButtonText
  editPageItems = this.config.editPageItems
  patternItems = this.config.patternItems

  customerEditItems = this.config.customerEditItems

  userEditItems = this.config.userEditItems

  userSetting: boolean = false

  newEmail!: string
  newId!: string

  messages = this.config.toastrItems

  errorMessage!: string

  constructor(
    private customerService: CustomerService,
    private config: ConfigService,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.errorMessage!
  }

  saveCustomer(newCustomer: Customer): void {
    this.customerService.getOneByEmail(newCustomer.email).subscribe(response => {
      if (response._id) {
        this.errorMessage = this.config.editPageText[22].name
        setTimeout(() => {
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/', 'signup'])});
        }, 3000)
      }

      if (response['message'] === 'Customer is not found') {
        this.errorMessage!
        this.userSetting = true
        newCustomer.active = true
        this.customerService.create(newCustomer).subscribe(
            customer => this.getNewData(customer.email));
      }
    })
  }

  saveUser(user: User): void {
    user.email = this.newEmail
    user.customerID = this.newId
    this.authService.signup(user)
    this.toastr.success(this.messages[3].message, this.messages[3].title);
    this.userSetting = false
    this.newEmail!
    this.newId!
  }

  getNewData(email: string): void {
    this.customerService.getOneByEmail(email).subscribe(customer => {
      this.newId = customer._id
      this.newEmail = customer.email
    })
  }

}
