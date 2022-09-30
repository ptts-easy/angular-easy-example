import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-b1',
  template: `
    <div style="border:3px dotted red;">
      This is ComponentB1.
    </div>
  `
})
export class ComponentB1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
