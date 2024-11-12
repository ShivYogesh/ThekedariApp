import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor() { }
  logout(){
    try {
      sessionStorage.clear();
    } catch (error) {
      alert("Error From session Storage ");
    }
    
    
  }
}
