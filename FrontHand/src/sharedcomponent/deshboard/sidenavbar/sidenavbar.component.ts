import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { menuModel } from '../../../models/UI/menuModel';


@Component({
  selector: 'app-sidenavbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidenavbar.component.html',
  styleUrl: './sidenavbar.component.css'
})

export class SidenavbarComponent {
  _togelmenu: boolean = true;
  menuItems:menuModel[]=[{menuText:'Deshboard',menuLink:'deshboard', menuIcon:'fas fa-tv ',isactive:true},
    {menuText:'Tender Index List',menuLink:'tenderindexlist', menuIcon:'fa-solid fa-mug-saucer',isactive:true},
    {menuText:'Tender Index',menuLink:'tenderindex', menuIcon:'far fa-folder',isactive:true},
    {menuText:'User',menuLink:'user', menuIcon:'fa-solid fa-user',isactive:true},
    {menuText:'Masters',menuLink:'menulink-04', menuIcon:'fa-solid fa-cube',isactive:true},
    {menuText:'Tractions',menuLink:'menulink-05', menuIcon:'fa-solid fa-gears',isactive:true},
    {menuText:'Reports',menuLink:'reports', menuIcon:'fa-solid  fa-folder-open',isactive:true},
    {menuText:'Logout',menuLink:'', menuIcon:'fa fa-sign-out',isactive:true}
    
  ];
  
      
  togelmenu() {
    if (this._togelmenu) {
      this._togelmenu = false;
    }
    else {
      this._togelmenu = true;
    }
  }//End of togelmenu() 
  
}
