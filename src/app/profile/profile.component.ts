import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../services/user.service";
import { User } from "../classes/User";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  id: number;
  user: User;

  constructor(
    private _router: ActivatedRoute,
    private _userService: UserService,
    private _authService: AuthService
  ) {}

  isAtuthUserProfile(): boolean {
    return +this.id == +this._authService.getAuthUserId();
    // if (+this.id == +this._authService.getAuthUserId()) {
    //   this._userService.getUseById(this.id).then(user => (this.user = user));
    //   return true;
    // }
    // return false;
  }

  ngOnInit() {
    this._router.params.subscribe(params => {
      this.id = +params["id"];
    });

    this._userService.getUseById(this.id).then(user => (this.user = user));
  }
}
