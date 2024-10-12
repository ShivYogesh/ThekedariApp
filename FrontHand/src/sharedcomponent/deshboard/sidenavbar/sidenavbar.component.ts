import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidenavbar.component.html',
  styleUrl: './sidenavbar.component.css'
})

export class SidenavbarComponent {
  
  
  
      userpicpath="/images/anup.jpg";
      username="Anoop Singh";
  
  
}
