import { Component, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { Hero } from '../../classes//hero';
import { HEROES } from '../../classes/hero';

import { ChildPageComponent } from './child-page/child-page.component';

@Component({
  selector: 'app-parent-page',
  templateUrl: './parent-page.component.html',
  styleUrls: ['./parent-page.component.css']
})

export class ParentPageComponent implements AfterViewInit {
  @ViewChild('title') title!: ElementRef;
  @ViewChild('childPage') childPage!: ChildPageComponent;

  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log("title:", this.title.nativeElement);
    console.log("childPage:", this.childPage);
  }  

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  onClick(): void {
    this.title.nativeElement.innerHTML = this.childPage.getHeroId() + ":" + this.childPage.getHeroName();
  }
}
