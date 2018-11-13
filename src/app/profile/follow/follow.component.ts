import { Component, OnInit, Input } from '@angular/core';
import { FollowService } from 'src/app/services/follow.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {

  @Input() currentProfile;
  public isFollowingUser:boolean;
  private isLoading: boolean = true;

  constructor(
    private _followingService : FollowService
  ) { }

  ngOnInit() {
    this._followingService.isFollowing(this.currentProfile)
        .then(res => {        
          this.isLoading = false;
          this.isFollowingUser = res;
        })
  }

  follow() {
    this.isLoading = true
    this._followingService.follow(this.currentProfile)
        .then(res => {
          this.isFollowingUser = true;
          this.isLoading = false;
        })
  }

  unFollow() {
    this.isLoading = true;
    this._followingService.unFollow(this.currentProfile)
    .then(res => {
      this.isFollowingUser = false;
      this.isLoading = false;
    })
  }

}
