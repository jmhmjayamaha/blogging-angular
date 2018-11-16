import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { AuthService } from './auth.service';
import { CONFIG } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  headers;

  constructor(private _http: Http, private _authService: AuthService) {
    this.headers = new Headers({
      Authorization: `Bearer ${this._authService.getToken()}`
    });
   }

  createJoke(joke) : Promise<any>{
    let baseUrl = `${CONFIG.API_URL}/jokes`;
    let body = { title: joke.title, joke: joke.content}
    let options = new RequestOptions({ headers : this.headers});

    return this._http.post(baseUrl, body, options)
        .toPromise()
        .then((res) => {
          return res.json();
        })
  }
}