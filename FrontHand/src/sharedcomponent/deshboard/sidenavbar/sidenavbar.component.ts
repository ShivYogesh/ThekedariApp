import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { menuModel } from '../../../models/menuModel';


@Component({
  selector: 'app-sidenavbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidenavbar.component.html',
  styleUrl: './sidenavbar.component.css'
})

export class SidenavbarComponent {
  
  menuItems:menuModel[]=[{menuText:'Deshboard',menuLink:'deshboard', menuIcon:'fa-solid fa-house',isactive:true},
    {menuText:'Tender Index List',menuLink:'tenderindexlist', menuIcon:'fa-solid fa-mug-saucer',isactive:true},
    {menuText:'Tender Index',menuLink:'tenderindex', menuIcon:'fa-solid fa-mug-saucer',isactive:true},
    {menuText:'User',menuLink:'user', menuIcon:'fa-solid fa-user',isactive:true},
    {menuText:'Masters',menuLink:'menulink-04', menuIcon:'fa-solid fa-cube',isactive:true},
    {menuText:'Tractions',menuLink:'menulink-05', menuIcon:'fa-solid fa-gears',isactive:true},
    {menuText:'Reports',menuLink:'reports', menuIcon:'fa-solid  fa-folder-open',isactive:true}
    
  ];
  
      userpicpath="/images/anup.jpg";
      username="Anoop Singh";
  
  
}
