import { Component, OnInit } from "@angular/core";
import { NotifyService } from "../services/notify.service";
import { Message } from "../classes/Message";

@Component({
  selector: "app-notify",
  templateUrl: "./notify.component.html",
  styleUrls: ["./notify.component.css"]
})
export class NotifyComponent implements OnInit {
  message: Message;

  constructor(private _notityService: NotifyService) {
    this._notityService.newMessageRecived.subscribe(message =>
      this.newMessageRecieved(message)
    );
  }

  newMessageRecieved(message: Message) {
    this.message = message;

    setTimeout(() => {
      this.message = new Message("", "");
    }, 2000);
  }
  ngOnInit() {}
}
