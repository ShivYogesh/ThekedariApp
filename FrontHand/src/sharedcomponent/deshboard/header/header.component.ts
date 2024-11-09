import { Component, inject } from '@angular/core';
import { LogoutService } from '../../../services/logout.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserinfoComponent } from '../../userinfo/userinfo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,UserinfoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private _LogoutService: LogoutService, private route: Router) { }
  islogedStatus = true;
 
  logout() {
    this._LogoutService.logout();
    this.route.navigateByUrl('/login');

  }
  

}

