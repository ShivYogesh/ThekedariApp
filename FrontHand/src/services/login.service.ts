import { inject, Injectable } from '@angular/core';
import { userModel } from '../models/userModel';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  http = inject(HttpClient);
  router = inject(Router);
  //_objUser: userModel = {id: 1,username: "", pwd: "",isactive: true}
  // _objUser: userModel=<userModel>{};

  constructor() {

  }

  chkLogin(data: userModel) {
    this.http.post("http://localhost:5000/login", data).subscribe(
      {
        next: (apiresultdata: any) => {
          if (apiresultdata._loginApiModel.loginStatus == true) {
            alert("Welcome Sir/Madam Login Sucessfull" + apiresultdata._loginApiModel.msg);
            sessionStorage.setItem("mytokan", apiresultdata._loginApiModel.tokan);
            sessionStorage.setItem("isUserLoged", "userloged");
            this.router.navigateByUrl('/deshboard');

          }
          else {
            alert("Wrong Login Details !" + apiresultdata._loginApiModel.msg);
          }

        },
        error: (err: any) => {
          // if API Server Not Working or Network Not Working
          alert("Problem in Calling API Err from Server Is : " + err.message);
        }
      }
    );


  }


};




