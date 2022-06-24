import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'].join(' ,');


    if (!this.authService.currentUserValue || !this.authService.currentUserValue.role || !expectedRole.includes(this.authService.currentUserValue.role)) {
      this.router.navigate(['forbidden']);
      return false;
    }
    return true;
  }
}
