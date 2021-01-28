import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelGuard } from './auth/guard/level.guard';
import { LoginAuthGuard } from './auth/guard/login-auth.guard';
import { DashComponent } from './pages/dash/dash.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: DashComponent,
    canActivate: [LoginAuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        canActivate: [LevelGuard],
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'users',
        canActivate: [LevelGuard],
        loadChildren: () =>
          import('./modules/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'product',
        canActivate: [LevelGuard],
        loadChildren: () =>
          import('./modules/product/product.module').then(
            (m) => m.ProductModule
          ),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
