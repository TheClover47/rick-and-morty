import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { UserService } from './services/user.service';
import { CanActivateFn } from '@angular/router';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "dashboard", canActivate: [authGuard], component: DashboardComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "browse", component: ProfileCardComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent]
