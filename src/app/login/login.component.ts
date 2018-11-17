import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { NotifyService } from "../services/notify.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService, private _notifyService: NotifyService) {}

  ngOnInit() {}

  onSubmit(form) {
    this._authService
      .logIn(form.value.email, form.value.password)
      .then(userData => {
        this._authService.loggedUserIn(userData);
      }).catch(e => {
        console.log(e);
        this._notifyService.notify(e.error, 'error');
      });
  }
}
