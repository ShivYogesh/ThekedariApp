import { Component, inject, OnInit } from '@angular/core';
import { userModel } from '../../../models/userModel';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  http=inject(HttpClient);
  Datatabelname="User Masters";
  _users:userModel[]=[
   /* {userName:'y1',userPassword: "y1"},
    {userName:'y2',userPassword: "y2"},
    {userName:'y3',userPassword: "y3"},
    {userName:'y4',userPassword: "y4"},
    */
   ];
  //const myArr: Cricketer[] = [cktr1, cktr2, cktr3]; 
  ngOnInit(): void {
   
    try {
     
      this.http.get("http://localhost:5000/api/user").subscribe((apiresult:any)=>{
        if(apiresult)
        {
          this._users=apiresult;
        }
        else{
          alert('No Data From API : ');
        }
        
      });
    } catch (error) {
      alert('Error from ngOnInit-user API : '+error);
      
    }
    
  }
 
 
   

   onclickDelete(username:String){
        alert(username);
   }
   onclickUpdate(username:String){
    alert(username);
}
}
