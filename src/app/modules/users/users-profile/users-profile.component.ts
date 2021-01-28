import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-profile',
  template: ` <p>#ID({{ id }}) users-profile works!</p> `,
})
export class UsersProfileComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute) {}

  get id() {
    return this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {}
}
