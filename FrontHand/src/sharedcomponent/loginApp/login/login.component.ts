import { Component, inject } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { userModel } from '../../../models/userModel';
import { LoginService } from '../../../services/login.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formheading="Login Form";
  isFormValid:boolean=false;
  _objUser:userModel={
  userName:"y1",
  userPassword:"y1"
}
http=inject(HttpClient);
constructor(){
  //injecting or Defining login serves bu constructor
 
}  

  loginchaking(){
   
   // const loginchaking=this._loginServices.chkLogin(this._objUser);

   
  }
  chklogin(formdata:NgForm){
   // this._objUser.userName=formdata.control.user
    
    this._objUser.userName=formdata.value.userName;
    this._objUser.userPassword=formdata.value.userPassword;
    
    console.log("Before API Calling");
    try{
      this.http.post("http://localhost:5000/login",this._objUser).subscribe((apiresult:any)=>{
        console.log(" in Api Result ");
        console.log(apiresult);
        console.log(apiresult.loginStatus);
        if(apiresult.loginStatus==true)
        {
          console.log("Login Api Hit Sucessfully");
        }
        else
        {
          console.log("Login Api Hit Failear Result");
        }
        
      });
    }catch(err){
      console.log("Log By Catch Block "+err);
    }

    
    console.log("After API Calling");

  }
}
