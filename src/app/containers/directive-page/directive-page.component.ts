import { Component, OnInit, ViewChild} from '@angular/core';
import { Hero } from '../../classes/hero';
import { HEROES } from '../../classes/hero';

@Component({
  selector: 'app-directive-page',
  templateUrl: './directive-page.component.html',
  styleUrls: ['./directive-page.component.css']
})

export class DirectivePageComponent implements OnInit {

  myclass = "class_white";
  myStyle = {"color": "white"};

  colors = ["white", "black", "red", "green", "blue", "yellow", "magenta", "cyan"];

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;
  selectedHero?: Hero;

  color = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  setMyClass(color: string) {
    this.myclass = "class_" + color;
  }

  setColor(color: string) {
    this.myStyle = {"color": color};
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
