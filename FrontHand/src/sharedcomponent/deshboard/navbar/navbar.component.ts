import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoutService } from '../../../services/logout.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  constructor(private _LogoutService: LogoutService){
  }
  activerout:string="activerout";//Hold Active Route Decoration Class Name 
  // Caling logout Serves ->logout method for logout
  logout(){
    this._LogoutService.logout();
    localStorage.setItem("mytokan","");
  }
  
}
