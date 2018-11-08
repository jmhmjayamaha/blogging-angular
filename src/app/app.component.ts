import { Component } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { User } from "./classes/User";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  user: User;

  constructor(private _authService: AuthService) {
    this.user = this._authService.getAuthUser();
  }

  isloggedIn(): boolean {
    return this._authService.isLoggedIn();
  }

  logout() {
    this._authService.logout();
  }
}
