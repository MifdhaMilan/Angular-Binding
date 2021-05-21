import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  public call = "";
  constructor() { }

  ngOnInit() {
  }
  callUser() {
    console.log("welcome User");
    this.call = "This is will pop up on button click";
  }
  getInfo(event) {
    console.log(event);
  }
}
