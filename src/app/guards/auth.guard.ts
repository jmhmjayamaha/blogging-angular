import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate() {
    if(this._authService.isLoggedIn()) {
        return true;
    }

    this._router.navigate(['/auth/login']);

    return false;
  }
}
