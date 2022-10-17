import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output-page',
  templateUrl: './input-output-page.component.html',
  styleUrls: ['./input-output-page.component.css']
})
export class InputOutputPageComponent implements OnInit {
  @Input() item = '';
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
