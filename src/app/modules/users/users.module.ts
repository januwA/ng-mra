import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersProfileComponent } from './users-profile/users-profile.component';


@NgModule({
  declarations: [UsersComponent, UsersCreateComponent, UsersProfileComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
