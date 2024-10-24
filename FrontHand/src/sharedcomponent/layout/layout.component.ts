import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavbarComponent } from '../deshboard/sidenavbar/sidenavbar.component';
import { NavbarComponent } from '../deshboard/navbar/navbar.component';
import { HeaderComponent } from '../deshboard/header/header.component';
import { FooterComponent } from '../deshboard/footer/footer.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,SidenavbarComponent,NavbarComponent,HeaderComponent,FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
