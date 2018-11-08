import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { CONFIG } from "src/config/config";
import { Router } from "@angular/router";
import { UserData } from "../classes/UserData";
import { User } from "../classes/User";
import { NotifyService } from "./notify.service";
// import 'rxjs/add/operator/toPromise'

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private _http: Http,
    private _router: Router,
    private _notifyService: NotifyService
  ) {}

  getAuthUser(): User {
    return JSON.parse(localStorage.getItem("user"));
  }

  getAuthUserId(): number {
    return JSON.parse(localStorage.getItem("user")).data.id;
  }

  getToken(): string {
    return localStorage.getItem("token");
  }

  register(name: string, email: string, password: string): Promise<UserData> {
    return this._http
      .post(`${CONFIG.API_URL}/register`, {
        name: name,
        email: email,
        password: password
      })
      .toPromise()
      .then(response => {
        let token = response.json().token;
        let user = response.json().user;

        let userdata = new UserData(token, user);
        return userdata;
      })
      .catch(() => {
        console.log("something went wrong");
        return null;
      });
  }

  logIn(email: string, password: string): Promise<UserData> {
    return this._http
      .post(`${CONFIG.API_URL}/authenticate`, {
        email: email,
        password: password
      })
      .toPromise()
      .then(response => {
        let token = response.json().token;
        let user = response.json().user;

        let userdata = new UserData(token, user);
        return userdata;
      });
  }

  loggedUserIn(userdata: UserData) {
    localStorage.setItem("token", userdata.token);
    localStorage.setItem("user", JSON.stringify(userdata.user));

    this._notifyService.notify("Successfully log In", "success");

    this._router.navigate(["/dashboard"]);
  }

  isLoggedIn() {
    let token = localStorage.getItem("token");
    let user = localStorage.getItem("user");

    if (token && user) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    this._router.navigate(["/auth/login"]);
  }
}
