import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [],
  },
  {
    path: 'users-create',
    component: UsersCreateComponent,
  },

  // 需要将动态路由放在users-create下面
  {
    path: ':id',
    component: UsersProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
