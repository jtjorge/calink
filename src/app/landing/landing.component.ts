import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor() { }

  ngOnInit() {}

  scroll1(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
  scroll2(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
  scroll3(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  

}
