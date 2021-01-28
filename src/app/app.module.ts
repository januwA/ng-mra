import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashComponent } from './pages/dash/dash.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, DashComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
