import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../../classes/hero';

@Component({
  selector: 'app-input-page-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
