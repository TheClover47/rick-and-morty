import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CustomMaterialModule } from '../app/materialmodule/materialmodule.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SideNavigationPanelComponent } from './side-navigation-panel/side-navigation-panel.component';
import { userReducer } from './store/reducers/user.reducer';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { PopupComponentComponent } from './popup-component/popup-component.component';
import { GraphQLModule } from './graphql.module';
import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterCardComponent } from './character-card/character-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CharactersListComponent,
    TopNavigationBarComponent,
    CharacterCardComponent,
    DashboardComponent,
    SearchBarComponent,
    routingComponents,
    SideNavigationPanelComponent,
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
    GraphQLModule,
  ],
  exports: [
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
