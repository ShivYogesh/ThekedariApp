import { inject, Injectable } from '@angular/core';
import { userModel } from '../models/userModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {


  constructor() {
 
   }
  chkLogin(data:userModel)
  {
    
   
      
    };
    
   /* if(data.userName=="yogesh" && data.userPassword=="yogesh")
    {
      sessionStorage.setItem("isUserLoged","userloged");
      return true;
    }
    else
    {
      sessionStorage.setItem("isUserLoged","usernotloged");
      return false;
    }*/
  }

