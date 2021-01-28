import { Component, OnInit } from '@angular/core';
import {
  GuardsCheckEnd,
  NavigationCancel,
  NavigationEnd,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';

@Component({
  selector: 'app-dash',
  template: `
    <h2>Modules</h2>
    <ul>
      <li><a [routerLink]="['/home']">首页</a></li>
      <li><a [routerLink]="['/users']">用户列表</a></li>
      <li><a [routerLink]="['/product']">产品列表</a></li>
    </ul>
    <hr />
    <router-outlet>
      <span class="loader" *ngIf="loading">loading...</span>
    </router-outlet>
  `,
})
export class DashComponent implements OnInit {
  loading = false;
  constructor(private readonly router: Router) {
    this.router.events.subscribe((event: RouterEvent): void => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd) {
        this.loading = false;
      } else if (event instanceof GuardsCheckEnd) {
        this.loading = false;
      }
    });
  }

  ngOnInit(): void {}
}
