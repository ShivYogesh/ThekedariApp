import { Component, inject } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { userModel } from '../../../models/userModel';
import { LoginService } from '../../../services/login.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
  constructor() {
    //injecting or Defining login serves bu constructor

  }

  loginchaking() {

    // const loginchaking=this._loginServices.chkLogin(this._objUser);


  }
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
              localStorage.setItem("mytokan",apiresultdata._loginApiModel.tokan);
            
            }
            else {
              alert("Wrong Login Details !"+apiresultdata._loginApiModel.msg);
            }
            
          },
          error:(err:any)=>{
            // if API Server Not Working or Network Not Working
              alert("Problem in Calling API Its Network Issue or Server Issue Pls Contact to Admin");
          }
        }
       );
    
   
  }
}
