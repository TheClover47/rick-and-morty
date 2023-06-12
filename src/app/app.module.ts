import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfilePopupComponent } from './profile-popup/profile-popup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileCardComponent,
    NavigationComponent,
    ProfilePopupComponent,
    DashboardComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  exports: [
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
