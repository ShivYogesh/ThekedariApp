import { Component, inject } from '@angular/core';
import { LogoutService } from '../../../services/logout.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private _LogoutService: LogoutService, private route: Router) { }
  islogedStatus = true;
  _togelmenu: boolean = true;
  logout() {
    this._LogoutService.logout();
    this.route.navigateByUrl('/login');

  }
  togelmenu() {
    if (this._togelmenu) {
      this._togelmenu = false;
    }
    else {
      this._togelmenu = true;
    }
  }//End of togelmenu() 

}

