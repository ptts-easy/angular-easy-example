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
    ["parent", "Parent/Child"],
    ["lifecycle", "Lifecycle"],
    
    ["event", "Event"]
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
