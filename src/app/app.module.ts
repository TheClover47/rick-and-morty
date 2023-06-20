import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfilePopupComponent } from './profile-popup/profile-popup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CustomMaterialModule } from '../app/materialmodule/materialmodule.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardNavigationComponent } from './card-navigation/card-navigation.component';
import { userReducer } from './store/reducers/user.reducer';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { PopupComponentComponent } from './popup-component/popup-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileCardComponent,
    NavigationComponent,
    ProfilePopupComponent,
    DashboardComponent,
    SearchBarComponent,
    routingComponents,
    CardNavigationComponent,
    PopupComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(
      reducers
    ),
  ],
  exports: [
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
