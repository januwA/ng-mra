import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <h3>用户模块</h3>

    <a [routerLink]="['users-create']">创建用户</a>

    <ul>
      <li><a [routerLink]="['1']">用户1</a></li>
      <li><a [routerLink]="['2']">用户2</a></li>
    </ul>
  `,
  styles: [],
})
export class UsersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
