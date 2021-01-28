import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <p>login works!</p>
    <button (click)="login('admin')">admin 登录）权限1</button>
    <button (click)="login('sadmin')">sadmin 登录）权限2</button>
  `,
})
export class LoginComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  login(p) {
    sessionStorage.setItem('token', p);
    this.router.navigate(['/']);
  }
}
