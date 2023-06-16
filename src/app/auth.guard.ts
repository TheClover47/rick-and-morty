import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from './services/user.service';

export const authGuard: CanActivateFn = ()=>{
  const auth = inject(UserService)
  return auth.loggedIn();
}
