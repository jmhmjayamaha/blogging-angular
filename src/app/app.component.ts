import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private _authService: AuthService){}

  isloggedIn(): boolean{
    return this._authService.isLoggedIn();
  }

  logout() {
    this._authService.logout();
  }
}
