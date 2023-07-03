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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SideNavigationPanelComponent } from './side-navigation-panel/side-navigation-panel.component';
import { reducers } from './store/reducers';
import { PopupComponentComponent } from './popup-component/popup-component.component';
import { GraphQLModule } from './graphql.module';
import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoreModule } from '@ngrx/store';
import { SortByPipe } from './shared/sort-by.pipe';
import { LoaderInterceptor } from './services/loader.interceptor';
import { FootNavComponent } from './foot-nav/foot-nav.component';
import { LocationCardComponent } from './location-card/location-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CharactersListComponent,
    TopNavigationBarComponent,
    CharacterCardComponent,
    LocationCardComponent,
    DashboardComponent,
    SearchBarComponent,
    routingComponents,
    SideNavigationPanelComponent,
    PopupComponentComponent,
    SortByPipe,
    FootNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    GraphQLModule,
    NgxPaginationModule,
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GraphQLModule,
    NgxPaginationModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
