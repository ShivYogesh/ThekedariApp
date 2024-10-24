import { Component, inject } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { userModel } from '../../../models/userModel';
import { LoginService } from '../../../services/login.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formheading = "Login Form";
  isFormValid: boolean = false;
  _objUser: userModel = {
    id: 1,
    username: "y1",
    pwd: "y1",
    isactive: true

  }
  http = inject(HttpClient);
  router = inject(Router);
  constructor(private _loginServices: LoginService) {
    //injecting or Defining login serves bu constructor

  }

  loginchaking(formdata: NgForm) {

    /* Geting Data From Form and Pasing to Serves*/
    this._objUser.username = formdata.value.userName;
    this._objUser.pwd = formdata.value.userPassword;
    this._loginServices.chkLogin(this._objUser);

  }






  /*  this Code copy and Pase in A Login Serves so here is comment
  chklogin(formdata: NgForm) {
    // this._objUser.userName=formdata.control.user

    this._objUser.username = formdata.value.userName;
    this._objUser.pwd = formdata.value.userPassword;
      this.http.post("http://localhost:5000/login", this._objUser).subscribe(
        {
          next: (apiresultdata: any) => {
            if(apiresultdata._loginApiModel.loginStatus==true){
              alert("Welcome Sir/Madam Login Sucessfull"+apiresultdata._loginApiModel.msg);
              sessionStorage.setItem("mytokan",apiresultdata._loginApiModel.tokan);
              sessionStorage.setItem("isUserLoged","userloged");
              this.router.navigateByUrl('/deshboard');
            
            }
            else {
              alert("Wrong Login Details !"+apiresultdata._loginApiModel.msg);
            }
            
          },
          error:(err:any)=>{
            // if API Server Not Working or Network Not Working
              alert("Problem in Calling API Err from Server Is : "+err.message);
          }
        }
       );
    
   
  }
       */
}
