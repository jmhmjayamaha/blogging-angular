import { Component } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { User } from "./classes/User";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  user: User;
  id : number;

  constructor(
    private _authService: AuthService, 
    private _router: Router
  ) {
    this.user = this._authService.getAuthUser();
  }

  isloggedIn(): boolean {
    return this._authService.isLoggedIn();
  }

  logout() {
    this._authService.logout();
  }

  myProfile() {
      let url = `user/profile/${this.user.id}`;
      this._router.navigate([url])
  }
}
