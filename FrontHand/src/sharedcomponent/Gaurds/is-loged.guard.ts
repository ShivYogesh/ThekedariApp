import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';

export const isLogedGuard: CanActivateFn = (route, state) => {
 const _router=inject(Router);
  let _isUserLoged=sessionStorage.getItem("isUserLoged");
  if(_isUserLoged!="userloged")
  {
    // Send To Login Page if User Not Loged
    alert("Pls Use Login Page to Login");
    _router.navigate(['login']);
    return false;
  }
  
  return true;
};
