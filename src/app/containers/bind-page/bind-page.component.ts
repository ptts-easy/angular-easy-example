import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes//hero';
import { HEROES } from '../../classes/hero';

@Component({
  selector: 'app-bind-page',
  templateUrl: './bind-page.component.html',
  styleUrls: ['./bind-page.component.css']
})

export class BindPageComponent implements OnInit {
  m_var = "This is Class member var";
  title = document.title;

  clock_id = 0;
  time_clock = "00:00:00";
  
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
    this.tick();
    this.clock_id = setInterval(() => {this.tick(); }, 1000);
  }

  ngOnDestroy() {
    if (this.clock_id) {
      clearInterval(this.clock_id);
    }
  }
  
  titleChange(event: any) {
    this.title = event.target.value;
    document.title = this.title;
  }

  tick() {
    this.time_clock = `
      <div>
        <h1>Hello, world!</h1>
        <h2>It is ${new Date().toLocaleTimeString()}.</h2>
      </div>
    `;
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
