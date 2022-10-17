import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../../classes/hero';

@Component({
  selector: 'app-child-page',
  templateUrl: './child-page.component.html',
  styleUrls: ['./child-page.component.css']
})
export class ChildPageComponent implements OnInit {
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  getHeroId() {
    if(this.hero == undefined) {
      return "id undefined";
    }
    return this.hero.id;
  }

  getHeroName() {
    if(this.hero == undefined) {
      return "name undefined";
    }
    return this.hero.name;
  }
}
