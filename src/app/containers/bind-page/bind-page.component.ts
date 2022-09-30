import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-bind-page',
  templateUrl: './bind-page.component.html',
  styleUrls: ['./bind-page.component.css']
})

export class BindPageComponent implements OnInit {
  m_var = "This is Class member var";
  title = document.title;
  
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit(): void {
  }

  titleChange(event: any) {
    this.title = event.target.value;
    document.title = this.title;
  }
}
