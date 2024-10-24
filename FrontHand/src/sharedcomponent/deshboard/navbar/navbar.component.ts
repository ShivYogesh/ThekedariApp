import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  constructor(){
  }
  activerout:string="activerout";//Hold Active Route Decoration Class Name 
  // Caling logout Serves ->logout method for logout
  
  
}
