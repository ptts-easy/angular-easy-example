import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {
  @ViewChild('newItem') newItem!: ElementRef;

  currentItem = 'Television';
  
  constructor() { }

  ngOnInit(): void {
  }

  outputItem(newItem: string) {
    this.newItem.nativeElement.textContent = newItem;
  }
}
