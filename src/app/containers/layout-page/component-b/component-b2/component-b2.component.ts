import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-b2',
  template: `
    <div style="border:3px dotted red;">
      This is ComponentB2.
    </div>
  `
})
export class ComponentB2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
