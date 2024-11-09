import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { menuModel } from '../../../models/UI/menuModel';



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
  

  menuItems:menuModel[]=[{menuText:'Home',menuLink:'', menuIcon:'fa-solid fa-house',isactive:true},
    {menuText:'About',menuLink:'aboutus', menuIcon:'',isactive:true},
    {menuText:'Contact-Us',menuLink:'contactus', menuIcon:'',isactive:true},
    
    
  ];
  
  
}
