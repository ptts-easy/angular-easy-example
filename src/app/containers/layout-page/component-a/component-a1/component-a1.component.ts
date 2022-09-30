import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-a1',
  template: `
    <div style="border:3px dotted red;">
      This is ComponentA1.
    </div>
  `
})
export class ComponentA1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
