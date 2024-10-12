import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor() { }
  logout(){
    sessionStorage.setItem("isUserLoged","userLogOut");
    alert("Logout");
  }
}
