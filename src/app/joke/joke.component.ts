import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { JokeService } from '../services/joke.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input() joke;
  editing: boolean = false;
  title:FormControl;
  content: FormControl;

  constructor(
    private _authService: AuthService, 
    private _jokeService : JokeService,
    private _notifyService : NotifyService
  ) { }

  ngOnInit() {
    this.title = new FormControl(this.joke.title, Validators.required);
    this.content = new FormControl(this.joke.content, Validators.required);
  }

  canModify(): boolean {
    return this.joke.user.id == this._authService.getAuthUserId();
  }

  edit() {
    this.editing = true;
  }

  updateJoke() {
    return this._jokeService.updateJoke(+this.joke.id, {
      title: this.title.value,
      content : this.content.value
    }).then(res => {
      this.joke = res;
      this.editing = false;
      this._notifyService.notify('Joke Updated', 'success')
    })
  }

  cancel() {
    this.title.reset();
    this.content.reset();
    this.editing = false;
  }
}
