import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-jokes',
  templateUrl: './create-jokes.component.html',
  styleUrls: ['./create-jokes.component.css']
})
export class CreateJokesComponent implements OnInit {

  jokeForm: FormGroup


  constructor(private _fb: FormBuilder) {
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

  }

  ngOnInit() {
  }

}
