import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JokeService } from '../services/joke.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-jokes',
  templateUrl: './create-jokes.component.html',
  styleUrls: ['./create-jokes.component.css']
})
export class CreateJokesComponent implements OnInit {

  jokeForm: FormGroup


  constructor(
    private _fb: FormBuilder, 
    private _router : Router,
    private _authServie : AuthService,
    private _jokes: JokeService
  ) {
    this.createJokes();
  }

  createJokes() {
    this.jokeForm = this._fb.group({
      title: ['', [
        Validators.required
      ]],
      content: ['', [
        Validators.required,
        Validators.minLength(5)
      ]]
    })
  }
  
  onSubmit() {
    this._jokes.createJoke(this.jokeForm.value)
        .then(res => {
          this._router.navigate(['user/profile/', this._authServie.getAuthUserId()]);
        })
  }

  ngOnInit() {
  }

}
