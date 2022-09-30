import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  menu = [
    ["bind", "Bind"],
    ["directive", "Directive"],
    ["layout", "Layout"],
    ["route", "Route"],
    ["state", "State"],
    ["prop", "Prop/Hook/Lifecycle"],
    ["contain", "Contain"],
    ["context", "Context"],
    ["reducer", "Reducer"],
    ["redux", "Redux"],
    ["sass", "Sass"],
    ["bootstrap", "Bootstrap"],
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
