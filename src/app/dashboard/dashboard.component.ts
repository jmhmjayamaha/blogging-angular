import { Component, OnInit } from '@angular/core';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data;

  constructor(
    private _jokeService : JokeService
  ) { }

  ngOnInit() {
    this.getAllJokes();
  }

  getNextPage() {
    this.getAllJokes(this.data.next_page_url);
  }

  getPrevPage() {
    this.getAllJokes(this.data.prev_page_url);
  }

  getAllJokes(endPoint = null) {
    this._jokeService.getAllJokes(endPoint)
        .then(res => {
          console.log(res);
          this.data = res;
        })
  }
}
