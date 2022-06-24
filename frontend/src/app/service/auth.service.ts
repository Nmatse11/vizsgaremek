import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

export interface IAuthModel {
  success: boolean;
  accessToken: string;
  user: User,
}

export interface ILoginData {
  email?: string;
  password?: string;
  customerID?: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiUrl;

  loginUrl: string = `${this.apiUrl}login`;
  signupUrl: string = `${this.apiUrl}signup`;

  user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  access_token$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {

    const loginInfo = sessionStorage.getItem('login');
    if (loginInfo) {
      const loginObject = JSON.parse(loginInfo);
      this.access_token$.next(loginObject.accessToken);
      this.user$.next(loginObject.user);
    }

    this.user$.subscribe({
      next: user => {
        if (user) {
          this.router.navigate(['/']);
        } else {
          this.access_token$.next('');
          sessionStorage.removeItem('login');
          this.router.navigate(['/']);
        }
      }
    });
  }

  get currentUserValue(): User | null {
    return this.user$.value
  }

  login(loginData: ILoginData): void {
    this.http.post<IAuthModel>(this.loginUrl, loginData).subscribe({
      next: (response: IAuthModel) => {
        this.user$.next(response.user);
        this.access_token$.next(response.accessToken);
        sessionStorage.setItem('login', JSON.stringify(response));
        if (response.user.role === 'admin') {
          this.router.navigate(['/', 'admin']);
        }
        if (response.user.role === 'editor') {
          this.router.navigate(['/', 'menu-editor']);
        }
        if (response.user.role !== 'editor' && response.user.role !== 'admin') {
        this.router.navigate(['/']);
        }
      },
      error: (err) => console.error(err),
    });
  }

  signup(signupData: User): void {
    this.http.post(this.signupUrl, signupData).subscribe({
      next: (response) => {
        const { email, password, customerID } = signupData
        this.login({ email, password, customerID })
      },
      error: (err) => console.error(err),
    });
  }

  logout(): void {
    this.user$.next(null)
  }

}
