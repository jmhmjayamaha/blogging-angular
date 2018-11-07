import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Http, RequestOptions, Headers } from "@angular/http";
import { CONFIG } from "src/config/config";
import { User } from "../classes/User";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private headers: Headers;

  constructor(private _authService: AuthService, private _http: Http) {
    this.headers = new Headers({
      Authorization: `Bearer ${this._authService.getToken()}`
    });
  }

  getUseById(id: number) {
    if (id == this._authService.getAuthUserId()) {
      return this._authService.getAuthUser();
    }

    let options = new RequestOptions({ headers: this.headers });

    return this._http
      .get(`${CONFIG.API_URL}/user/${id}`, options)
      .toPromise()
      .then(response => {
        console.log(response.json());
      });
  }
}
