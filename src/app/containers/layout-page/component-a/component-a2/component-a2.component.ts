import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-a2',
  template: `
    <div style="border:3px dotted red;">
      This is ComponentA2.
    </div>
  `
})
export class ComponentA2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
