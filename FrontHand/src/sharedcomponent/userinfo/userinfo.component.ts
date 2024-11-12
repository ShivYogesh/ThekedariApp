import { Component, inject } from '@angular/core';
import { LogoutService } from '../../services/logout.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.css'
})
export class UserinfoComponent {
  userpicpath="/images/anup.jpg";
      username="Anoop Singh";
      _router = inject(Router);
      _logoutservices = inject(LogoutService);
      
      logout(){
        this._logoutservices.logout();
        this._router.navigateByUrl('/login');
      }



}
