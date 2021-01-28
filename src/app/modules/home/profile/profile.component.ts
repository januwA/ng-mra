import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `<p>profile works!</p>

  <a [routerLink]="['../']">回到首页</a>
  
  `,
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
