import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-page',
  templateUrl: './directive-page.component.html',
  styleUrls: ['./directive-page.component.css']
})
export class DirectivePageComponent implements OnInit {
  myclass = "class_white";
  myStyle = {"color": "white"};

  colors = ["white", "black", "red", "green", "blue", "yellow", "magenta", "cyan"];

  constructor() {
  }

  ngOnInit(): void {
  }

  setMyClass(color: string) {
    this.myclass = "class_" + color;
  }

  setColor(color: string) {
    this.myStyle = {"color": color};
  }
}
