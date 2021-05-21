import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
  public isSuccess = "success";
  public hasError = true;
  public isSpecial = true;
  public multiClasses = {
    "success": !this.hasError,
    "danger": this.hasError,
    "special": this.isSpecial
  }
  constructor() { }

  ngOnInit() {
  }

}
