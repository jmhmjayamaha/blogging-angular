import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AuthService } from './auth.service';
import { CONFIG } from 'src/config/config';
import { config } from 'rxjs';

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

  getAllJokes(endPoint = null) {
    let url;
    if(endPoint) {
      url = endPoint;
    }
    else {
      url = `${CONFIG.API_URL}/jokes`; 
    }
    let options = new RequestOptions({ headers : this.headers});

    return this._http.get(url, options)
              .toPromise()
              .then(res => {
                return res.json();
              })

  }

  updateJoke(id:number , joke) {
    let url = `${CONFIG.API_URL}/jokes/${id}`;
    let options = new RequestOptions({headers : this.headers});
    let body = { title: joke.title, joke: joke.content};

    return this._http.put(url, body, options)
                .toPromise()
                .then(res => {
                  return res.json();
                })
  }

}
