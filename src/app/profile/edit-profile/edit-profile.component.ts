import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/classes/User";
import { NotifyService } from "src/app/services/notify.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"]
})
export class EditProfileComponent implements OnInit {
  user: User;

  constructor(
    private _authService: AuthService,
    private _notifyService: NotifyService,
    private _userService: UserService
  ) {}

  ngOnInit() {
    this.user = this._authService.getAuthUser();
  }

  editProfile() {
    console.log("user  : " + this.user);
    this._userService
      .updateProfile(this.user.name, this.user.email)
      .then(user => {
        this.user = user;
        this._notifyService.notify("Profile updated succesfully", "success");
      });
  }
}
