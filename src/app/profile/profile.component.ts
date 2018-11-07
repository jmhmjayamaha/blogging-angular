import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  id: number;

  constructor(
    private _router: ActivatedRoute,
    private _userService: UserService
  ) {}

  ngOnInit() {
    this._router.params.subscribe(params => {
      this.id = +params["id"];
    });

    this._userService.getUseById(this.id);
  }
}
