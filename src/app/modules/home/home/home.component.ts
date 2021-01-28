import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <p>home works!</p>

<a [routerLink]="['profile']">我的资料</a>

  `,
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
