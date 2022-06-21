import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfigService } from 'src/app/service/config.service';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  customer: Customer = new Customer();
  user: User = new User()

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private userService: UserService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    sessionStorage.removeItem('newEmail')
  }

  saveCustomer(customer: Customer): void {
      this.userSetting = true
      customer.active = true
      this.customerService.create(customer).subscribe(
        customer => this.getNewData(customer.email));
  }

  saveUser(user: User): void {
    user.email = this.newEmail
    user.customerID = this.newId
    this.userService.create(user).subscribe(
      response => {
        this.router.navigate(['/', 'home'])
        this.toastr.success(this.messages[3].message, this.messages[3].title);
        this.userSetting = false
        this.newEmail!
        this.newId!
        }
    )
  }

  getNewData(email: string): void {
    let newCustomerID!: string
    let newCustomerEmail!: string
    this.customerService.getAll().subscribe(customers => {
      newCustomerID = customers.filter(customer => customer.email === email).map(item => item._id)[0]
      newCustomerEmail = customers.filter(customer => customer.email === email).map(item => item.email)[0]
      this.newId = newCustomerID
      this.newEmail = newCustomerEmail
    })
  }

}
