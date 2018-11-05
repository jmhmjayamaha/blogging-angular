import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _authSerivce: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this._authSerivce.register(form.value.name, form.value.email, form.value.password)
        .then((userdata) => {
          this._authSerivce.loggedUserIn(userdata);
        })
  }
}
