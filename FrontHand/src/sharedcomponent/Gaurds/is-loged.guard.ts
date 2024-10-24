import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';

export const isLogedGuard: CanActivateFn = (route, state) => {
 try {
  const _router=inject(Router);
  let _isUserLoged=sessionStorage.getItem("isUserLoged");
  if(_isUserLoged!="userloged")
  {
    // Send To Login Page if User Not Loged
    _router.navigate(['login']);
    return false;
  }
  else{
    return true;
  }
 } catch (error) {
  return false;
 }
  
  
  
};
