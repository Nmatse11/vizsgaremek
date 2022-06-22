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
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiUrl;

  loginUrl: string = `${this.apiUrl}login`;

  currentUserSubject$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  lastAccess_token$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {

    const loginInfo = sessionStorage.getItem('login');
    if (loginInfo) {
      const loginObject = JSON.parse(loginInfo);
      this.lastAccess_token$.next(loginObject.accessToken);
      this.currentUserSubject$.next(loginObject.user);
    }

    this.currentUserSubject$.subscribe({
      next: user => {
        if (user) {
          this.router.navigate(['/']);
        } else {
          this.lastAccess_token$.next('');
          this.currentUserSubject$.next(null);
          sessionStorage.removeItem('login');
          this.router.navigate(['/', 'login']);
        }
      }
    });
  }

  /*get currentUserValue(): User | null {
    return this.currentUserSubject$.value
  }*/

  login(loginData: ILoginData): void {
    this.http.post<IAuthModel>(this.loginUrl, loginData).subscribe({
      next: (response: IAuthModel) => {
        this.currentUserSubject$.next(response.user);
        this.lastAccess_token$.next(response.accessToken);
        sessionStorage.setItem('login', JSON.stringify(response));
        this.router.navigate(['/']);
      },
      error: (err) => console.error(err),
    });
  }

  logout(): void {
        this.lastAccess_token$.next(''),
        this.currentUserSubject$.next(null);
        sessionStorage.removeItem('login');
        this.router.navigate(['/', 'login']);
  }

}
