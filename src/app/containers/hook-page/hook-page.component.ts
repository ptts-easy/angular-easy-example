import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hook-page',
  templateUrl: './hook-page.component.html',
  styleUrls: ['./hook-page.component.css']
})
export class HookPageComponent implements OnInit {

  constructor() { }

  ngOnChanges(): void {
    console.log("OnChanges");
  }

  ngOnInit(): void {
    alert("component mounted");
    console.log("OnInit");
  }

  ngDoCheck(): void {
    console.log("DoCheck");
  }

  ngAfterContentInit(): void {
    console.log("AfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("OnDestroy");
    alert("component unmounted");
  }
}
