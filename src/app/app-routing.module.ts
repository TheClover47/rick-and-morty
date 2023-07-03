import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth.guard';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { LoactionListComponent } from './loaction-list/loaction-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', canActivate: [authGuard], component: DashboardComponent,},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'characters', component: CharactersListComponent },
  { path: 'episodes', component: EpisodesListComponent },
  { path: 'locations', component: LoactionListComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [DashboardComponent, LoactionListComponent];
