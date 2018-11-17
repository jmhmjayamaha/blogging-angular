import { Injectable, EventEmitter } from "@angular/core";
import { AuthService } from "./auth.service";
import { Http, RequestOptions, Headers } from "@angular/http";
import { CONFIG } from "src/config/config";
import { User } from "../classes/User";

@Injectable({
  providedIn: "root"
})
export class UserService {
  public userProfileUpdated: EventEmitter<User>;

  private headers: Headers;

  constructor(private _authService: AuthService, private _http: Http) {
    this.userProfileUpdated = new EventEmitter();

    this.headers = new Headers({
      Authorization: `Bearer ${this._authService.getToken()}`
    });
  }

  getUseById(id: number): Promise<User> {
    if (id == this._authService.getAuthUserId()) {
      return Promise.resolve(this._authService.getAuthUser());
    }

    let options = new RequestOptions({ headers: this.headers });

    return this._http
      .get(`${CONFIG.API_URL}/user/${id}`, options)
      .toPromise()
      .then(response => response.json());
  }

  updateProfile(name: string, email: string): Promise<User> {
    let url = `${CONFIG.API_URL}/user/update`;
    let body = { name: name, email: email };
    let options = new RequestOptions({ headers: this.headers });

    return this._http
      .put(url, body, options)
      .toPromise()
      .then(response => {
        let user = response.json().data;

        localStorage.setItem("user", JSON.stringify(user));
        this.userProfileUpdated.emit(user);
        return user;
      });
  }

  getUserWall(id:number) {
    let url = `${CONFIG.API_URL}/user/profile/${id}/wall`
    let options = new RequestOptions({ headers : this.headers});

    return this._http.get(url, options)
        .toPromise()
        .then(res => {
          return res.json();
        })
  }
}
