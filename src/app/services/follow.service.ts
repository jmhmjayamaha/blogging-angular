import { Injectable } from "@angular/core";
import { Http , Headers, RequestOptions } from "@angular/http";
import { NotifyService } from "./notify.service";
import { AuthService } from "./auth.service";
import { CONFIG } from "src/config/config";

@Injectable()
export class FollowService {

    private headers : Headers;

    constructor(
        private _http : Http,
        private _notifyServide : NotifyService,
        private _authService : AuthService
    ) {
        this.headers = new Headers({ 'Authorization': `Bearer ${this._authService.getToken()}`});
    }

    isFollowing(id: number): Promise<boolean> {      
        let url = `${CONFIG.API_URL}/user/is/following`;
        let body = { user_to_check_if_is_following_id : id}
        let options = new RequestOptions({ headers : this.headers});

        return this._http.post(url, body, options)
                .toPromise()
                .then(res => {
                    return res.json().following;
                })
    }
}