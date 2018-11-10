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

  constructor(
    private _followingService : FollowService
  ) { }

  ngOnInit() {
    this._followingService.isFollowing(this.currentProfile)
        .then(res => {
          this.isFollowingUser = res;
        })
  }

}
