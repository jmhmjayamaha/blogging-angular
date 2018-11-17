import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  jokes;
  id:number

  constructor(
    private _route : ActivatedRoute,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this._route.params.subscribe(param => {
      this.id = param['id'];
      this.getUserWall();
    })
  }

  getUserWall() {
    this._userService.getUserWall(this.id)
        .then(res => {
          console.log(res);
          this.jokes = res.data;
        })
  }

}
