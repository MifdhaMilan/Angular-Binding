import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrls: ['./interpolation-binding.component.css']
})
export class InterpolationBindingComponent implements OnInit {
  public name = "Mifdha Milan";
  constructor() { }

  ngOnInit() {
  }
  Welcome() {
    return "Welcome " + this.name;
  }
}
