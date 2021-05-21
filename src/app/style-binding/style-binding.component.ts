import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
public hasError = false;
public bgColor = "orange";

public multiStyles = {
   color: "blue",
   fontStyle : "italic",
   backgroundColor : "pink"
}


  constructor() { }

  ngOnInit() {
  }

}
