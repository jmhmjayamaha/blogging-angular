import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthedGuard implements CanActivate {
  
  constructor(private _authService: AuthService, private _router : Router){}
  
  canActivate() {
    if(!this._authService.isLoggedIn()) {
      return true;
    }

    this._router.navigate(['/dashboard'])

    return false;
  }
}
